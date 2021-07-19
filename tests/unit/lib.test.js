const { contains, checkOverlapInTime } = require("../../lib");

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

describe("checkOverlapInTime", () => {
  it("should return false no overlap when opening time is greater", () => {
    const result = checkOverlapInTime("23:00", "2:30", "3:00", "4:00");
    expect(result).toBe(false);
  });

  it("should return true there is overlap in 24 format", () => {
    const result = checkOverlapInTime("22:00", "23:30", "22:30", "4:00");
    expect(result).toBe(true);
  });

  it("should return true there is overlap between yesterday and today", () => {
    const result = checkOverlapInTime("22:00", "1:00", "21:00", "4:00");
    expect(result).toBe(true);
  });

  it("should return true when search from time is greater too", () => {
    const result = checkOverlapInTime("22:00", "1:00", "21:00", "00:00");
    expect(result).toBe(true);
  });

  it("should return false wqhen no overlapse in normal format", () => {
    const result = checkOverlapInTime("1:00", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when blank", () => {
    const result = checkOverlapInTime("", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when invalid time", () => {
    const result = checkOverlapInTime("aaa", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when invalid time format", () => {
    const result = checkOverlapInTime("0000", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when invalid time format AM", () => {
    const result = checkOverlapInTime("5:00AM", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when invalid time format AM", () => {
    const result = checkOverlapInTime("5:00AM", "5:00", "6:00", "7:00");
    expect(result).toBe(false);
  });

  it("should return false when target time undefined", () => {
    const result = checkOverlapInTime("5:00", "5:00", undefined, undefined);
    expect(result).toBe(false);
  });

  it("should return false when clinic end time and target start time matches", () => {
    const result = checkOverlapInTime("11:00", "22:00", "22:00", "24:00");
    expect(result).toBe(false);
  });
});
