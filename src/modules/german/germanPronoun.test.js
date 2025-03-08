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

    const expectedResult = "ich";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for first person plural", () => {
    const iResult = findPersonSubject({
      person: Person.First,
      plurality: Plurality.Plural,
      formality: Formality.Informal,
    });

    const expectedResult = "wir";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person plural informal", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Plural,
      formality: Formality.Informal,
    });

    const expectedResult = "ihr";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person singular", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Singular,
      formality: Formality.Informal,
    });

    const expectedResult = "du";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person formal", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Singular,
      formality: Formality.Formal,
    });

    const expectedResult = "Sie";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for second person formal plural", () => {
    const iResult = findPersonSubject({
      person: Person.Second,
      plurality: Plurality.Plural,
      formality: Formality.Formal,
    });

    const expectedResult = "Sie";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person plural", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Plural,
      formality: Formality.Formal,
    });

    const expectedResult = "sie";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person singular feminine", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Formal,
      gender: Gender.Feminine,
    });

    const expectedResult = "sie";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person singular neuter", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Formal,
      gender: Gender.Neuter,
    });

    const expectedResult = "es";

    expect(iResult).toEqual(expectedResult);
  });

  it("should return correctly for third person singular neuter", () => {
    const iResult = findPersonSubject({
      person: Person.Third,
      plurality: Plurality.Singular,
      formality: Formality.Formal,
      gender: Gender.Masculine,
    });

    const expectedResult = "er";

    expect(iResult).toEqual(expectedResult);
  });
});
