import { describe, expect, it } from "vitest";
import { beVerb, Do } from "../data/englishVerbDictionary";
import { findConjugation } from "./index";
import { Person, Plurality } from "@/modules/common/types";
import { Tense } from "../types";

describe("finds present tense conjugations", () => {
  it("processes auxiliary verbs correctly", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Present,
      Plurality.Plural
    );

    expect(result).toEqual("do");
  });

  it("processes third person plural auxiliary verbs correctly", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Present,
      Plurality.Plural
    );

    expect(result).toEqual("do");
  });

  it("processes third person plural auxiliary verbs correctly in the singular", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Present,
      Plurality.Singular
    );

    expect(result).toEqual("does");
  });

  it("processes to Be second person plural correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Present,
      Plurality.Plural
    );

    expect(result).toEqual("are");
  });

  it("processes to Be third person plural correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Present,
      Plurality.Plural
    );

    expect(result).toEqual("are");
  });

  it("processes to Be third person singular correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Present,
      Plurality.Singular
    );

    expect(result).toEqual("is");
  });

  it("processes a normal entry correctly", () => {
    const conjugation = {
      infinitive: "abide",
      perfect: "abided",
      pastParticiple: "abided",
      presentParticiple: "abiding",
      thirdPerson: "abides",
    };
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Present,
      Plurality.Plural
    );

    expect(result).toEqual("abide");
  });
});

describe("finds past tense conjugations", () => {
  it("processes auxiliary verbs correctly", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Past,
      Plurality.Plural
    );

    expect(result).toEqual("did");
  });

  it("processes auxiliary verbs correctly in the singular", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Past,
      Plurality.Singular
    );

    expect(result).toEqual("did");
  });

  it("processes third person plural auxiliary verbs correctly", () => {
    const conjugation = Do;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Past,
      Plurality.Plural
    );

    expect(result).toEqual("did");
  });

  it("processes to Be second person plural correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Past,
      Plurality.Plural
    );

    expect(result).toEqual("were");
  });

  it("processes to Be third person plural correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Past,
      Plurality.Plural
    );

    expect(result).toEqual("were");
  });

  it("processes to Be third person singular correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(
      conjugation,
      Person.Third,
      Tense.Past,
      Plurality.Singular
    );

    expect(result).toEqual("was");
  });

  it("processes a normal entry correctly", () => {
    const conjugation = {
      infinitive: "abide",
      perfect: "abided",
      pastParticiple: "abided",
      presentParticiple: "abiding",
      thirdPerson: "abides",
    };
    const result = findConjugation(
      conjugation,
      Person.Second,
      Tense.Past,
      Plurality.Plural
    );

    expect(result).toEqual("abided");
  });
});
