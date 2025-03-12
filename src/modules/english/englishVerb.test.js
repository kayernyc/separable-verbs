import { conjugate } from "./index";
import { describe, it, expect } from "vitest";

describe("English verb module", () => {
  it("should return `be` correctly", () => {
    const beResult = conjugate("be");
    const expectedResult = {
      infinitive: "be",
      past: {
        0: "was",
        1: "were",
        2: "were",
        3: "were",
        4: "were",
        5: "were",
      },
      pastParticiple: "been",
      present: {
        0: "am",
        1: "are",
        2: "is",
        3: "are",
        4: "are",
        5: "are",
      },
      presentParticiple: "being",
    };

    expect(beResult).toEqual(expectedResult);
  });
});
