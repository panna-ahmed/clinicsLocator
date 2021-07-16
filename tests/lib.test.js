const { contains } = require("../lib");

describe("contains", () => {
  it("should return true if both string are same", () => {
    const result = contains("Dental", "Dental");
    expect(result).toBe(true);
  });

  it("should return true even if case if different", () => {
    const result = contains("Dental", "dental");
    expect(result).toBe(true);
  });

  it("should return true even if target is greater in length", () => {
    const result = contains("Dentalllll11111", "Dental");
    expect(result).toBe(true);
  });

  it("should return true if target and keyword has spaces", () => {
    const result = contains("   Dental  Clinic", "   Dental     ");
    expect(result).toBe(true);
  });

  it("should return false if keyword is greater in length", () => {
    const result = contains("Dental", "Dental111111");
    expect(result).toBe(false);
  });

  it("should return false if target is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(contains(a, "Dental")).toBe(false);
    });
  });
});
