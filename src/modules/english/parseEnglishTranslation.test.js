import { parseEnglishTranslation } from "./parseEnglishTranslation";
import { describe, it, expect } from "vitest";

describe("parseEnglishTranslation", () => {
  it("should return correct parts for drive off", () => {
    const result = parseEnglishTranslation("drive off");
    const expectedResult = { baseVerb: "drive", particle: "off" };

    expect(result).toEqual(expectedResult);
  });

  it("should return correct parts for depart (by car)", () => {
    const result = parseEnglishTranslation("depart (by car)");
    const expectedResult = { baseVerb: "depart", compliment: "(by car)" };

    expect(result).toEqual(expectedResult);
  });

  it("should return correct parts for depart (by car)", () => {
    const result = parseEnglishTranslation("divert");
    const expectedResult = { baseVerb: "divert" };

    expect(result).toEqual(expectedResult);
  });
});
