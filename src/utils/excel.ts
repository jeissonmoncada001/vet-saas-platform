import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface ExportOptions<T> {
  data: T[];
  fileName: string;
  sheetName?: string;
  headers?: Record<keyof T, string>;
}

export function exportToExcel<T extends object>({
  data,
  fileName,
  sheetName = "Hoja1",
  headers,
}: ExportOptions<T>): void {
  const exportData = headers
    ? data.map((row) =>
        Object.fromEntries(
          Object.entries(headers).map(([key, label]) => [label, (row as Record<string, unknown>)[key]])
        )
      )
    : data;

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();

  const colWidths = Object.keys(exportData[0] ?? {}).map((key) => ({
    wch: Math.max(key.length, 15),
  }));
  worksheet["!cols"] = colWidths;

  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  saveAs(blob, `${fileName}.xlsx`);
}
