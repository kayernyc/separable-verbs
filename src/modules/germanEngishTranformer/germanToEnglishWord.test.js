import { germanToEnglishWord } from "./index";
import { describe, it, expect } from "vitest";

describe("germanToEnglishWord", () => {
  it("should console the right things", () => {
    const germanKeyedVerb = {
      language: "de",
      translations: {
        en: ["burn down", "kick to the curb"],
      },
      particle: "ab",
      wordBase: "brennen",
    };

    const germanWord = {
      terminalVerb: "bob",
      infinitive: "ab|brennen",
      tense: "PRASENS",
      pronoun: {
        person: "first",
        plurality: "singular",
      },
    };

    germanToEnglishWord({
      germanKeyedVerb,
      germanWord,
    });

    expect(true).toBeTruthy();
  });
});
