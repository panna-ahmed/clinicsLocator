const { Clinic } = require("../../models/Clinic");

describe("clinic", () => {
  it("should return with state name when abreviation is given", () => {
    const result = new Clinic("Dental Clinic", "OH");
    expect(result.stateName).toBe("Ohio");
  });

  it("should return with state code when name is given", () => {
    const result = new Clinic("Dental Clinic", "Ohio");
    expect(result.stateCode).toBe("OH");
  });

  it("should return with state code when name is given", () => {
    const result = new Clinic("Dental Clinic", undefined);
    expect(result.stateCode).toBeFalsy();
    expect(result.stateName).toBeFalsy();
  });
});
