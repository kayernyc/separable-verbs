import { conjugate } from "./index";
import { describe, it, expect } from "vitest";

describe("German verb module", () => {
  it("should return be correctly", () => {
    const beResult = conjugate("sein");
    const expectedResult = {
      PRASENS: {
        0: "bin",
        1: "bist",
        2: "ist",
        3: "sind",
        4: "sind",
        5: "seid",
        6: "sind",
      },
      PRATERITUM: {
        0: "war",
        1: "warst",
        2: "war",
        3: "waren",
        4: "waren",
        5: "wart",
        6: "waren",
      },
      hilfsverb: "haben",
      infinitive: "sein",
      partizipII: "gewesen",
    };

    expect(beResult).toEqual(expectedResult);
  });
});
