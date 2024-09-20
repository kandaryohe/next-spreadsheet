import { useState } from "react";
import Cell from "./Cell";
import { Cellcontent } from "@/types/spreadsheet";

export default function Spreadsheet() {
  const [cellContents, setCellContents] = useState<Array<Array<Cellcontent>>>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
        </tr>
        {cellContents.map((row, i) => {
          return (
            <tr>
              <th>{i + 1}</th>
              {row.map((cell, j) => (
                <Cell
                  content={cell}
                  onChange={(updated: Cellcontent) => {
                    const updatedCellContents = [...cellContents];
                    updatedCellContents[i][j] = updated;
                    setCellContents(updatedCellContents);
                  }}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
