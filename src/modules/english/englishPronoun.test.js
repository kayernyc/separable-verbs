import { Formality, Gender, Person, Plurality } from "../common/types";
import { findPersonSubject } from "./types";
import { describe, it, expect } from "vitest";

describe("findPersonSubject", () => {
  it("should return correctly for first person singular", () => {
    const iResult = findPersonSubject({
      person: Person.First,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
    });

    const expectedResult = "I";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for first person plural", () => {
    const iResult = findPersonSubject({
      person: Person.First,
      plurality: Plurality.Plural,
      formality: Formality.Informal,
    });

    const expectedResult = "we";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person plural", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Plural,
      formality: Formality.Informal,
    });

    const expectedResult = "you";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person singular", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
    });

    const expectedResult = "you";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person feminine", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
      gender: Gender.Feminine,
    });

    const expectedResult = "she";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person masculine", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
      gender: Gender.Masculine,
    });

    const expectedResult = "he";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person neuter", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
      gender: Gender.Neuter,
    });

    const expectedResult = "it";

    expect(iResult).toEqual(expectedResult);
  });
});
