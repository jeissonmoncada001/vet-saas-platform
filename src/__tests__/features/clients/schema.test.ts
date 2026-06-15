import { clientSchema } from "@/features/clients/schemas";

describe("clientSchema", () => {
  const valid = {
    nombre: "Juan Pérez",
    documento: "123456",
    telefono: "3001234567",
    email: "juan@test.com",
    direccion: "Calle 1",
  };

  it("acepta datos válidos", () => {
    expect(clientSchema.safeParse(valid).success).toBe(true);
  });

  it("rechaza nombre muy corto", () => {
    const result = clientSchema.safeParse({ ...valid, nombre: "J" });
    expect(result.success).toBe(false);
  });

  it("rechaza email inválido", () => {
    const result = clientSchema.safeParse({ ...valid, email: "no-es-email" });
    expect(result.success).toBe(false);
  });

  it("acepta email vacío", () => {
    const result = clientSchema.safeParse({ ...valid, email: "" });
    expect(result.success).toBe(true);
  });

  it("rechaza documento muy corto", () => {
    const result = clientSchema.safeParse({ ...valid, documento: "123" });
    expect(result.success).toBe(false);
  });

  it("rechaza teléfono muy corto", () => {
    const result = clientSchema.safeParse({ ...valid, telefono: "123" });
    expect(result.success).toBe(false);
  });
});
