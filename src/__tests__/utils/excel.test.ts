import { exportToExcel } from "@/utils/excel";

jest.mock("file-saver", () => ({ saveAs: jest.fn() }));
jest.mock("xlsx", () => ({
  utils: {
    json_to_sheet: jest.fn(() => ({})),
    book_new: jest.fn(() => ({})),
    book_append_sheet: jest.fn(),
  },
  write: jest.fn(() => new ArrayBuffer(0)),
}));

describe("exportToExcel", () => {
  it("no lanza error con datos válidos", () => {
    expect(() =>
      exportToExcel({
        data: [{ nombre: "Test", email: "test@test.com" }],
        fileName: "test",
        sheetName: "Hoja1",
      })
    ).not.toThrow();
  });

  it("no lanza error con array vacío", () => {
    expect(() =>
      exportToExcel({ data: [], fileName: "vacio" })
    ).not.toThrow();
  });

  it("aplica headers personalizados cuando se proporcionan", () => {
    const XLSX = require("xlsx");
    exportToExcel({
      data: [{ nombre: "Juan", email: "juan@test.com" }],
      fileName: "clientes",
      headers: { nombre: "Nombre Completo", email: "Correo" } as Record<string, string>,
    });
    expect(XLSX.utils.json_to_sheet).toHaveBeenCalled();
  });
});
