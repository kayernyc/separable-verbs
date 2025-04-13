import { describe, expect, it } from "vitest";
import { beVerb, Do } from "../data/englishVerbDictionary";
import { findConjugation } from "./index";
import { Person } from "@/modules/common/types";

describe("english key completeness", () => {
  const testPerson = Person.Second;

  it("processes auxiliary verbs correctly", () => {
    const conjugation = Do;
    const result = findConjugation(conjugation, testPerson);

    expect(result).toEqual("aux");
  });

  it("processes to Be correctly", () => {
    const conjugation = beVerb;
    const result = findConjugation(conjugation, testPerson);

    expect(result).toEqual("be");
  });

  it("processes a normal entry correctly", () => {
    const conjugation = {
      infinitive: "abide",
      perfect: "abode",
      pastParticiple: "abode",
      presentParticiple: "abiding",
      thirdPerson: "abides",
    };
    const result = findConjugation(conjugation, testPerson);

    expect(result).toEqual("regular case");
  });
});
