interface Props {
  content: number | string;
}
import { Cellcontent } from "@/types/spreadsheet";
import { useEffect, useState } from "react";

interface Props {
  content: Cellcontent;
  onChange: (updated: Cellcontent) => void;
}

export default function Cell({ content: initialContent, onChange }: Props) {
  const [editing, setEditing] = useState<boolean>(false);
  const [content, setContent] = useState<Cellcontent>(initialContent);

  const onKeyDown = (event: any) => {
    if (["Enter", "Escape"].includes(event.key)) {
      setEditing(false);
    }
    if (event.key === "Enter") {
      onchange(content);
    }
  };
  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  return (
    <td onClick={() => setEditing(!editing)}>
      {editing ? (
        <input
          onClick={(e) => e.stopPropagation()}
          onKeyDown={onKeyDown}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : content.toString().startsWith("=") ? (
        evaluateFormula(content.toString())
      ) : (
        initialContent
      )}
    </td>
  );
}
