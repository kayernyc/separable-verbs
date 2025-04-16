import { Person, Plurality } from "@/modules/common/types";
import {
  type AuxiliaryVerb,
  isAuxiliaryVerb,
  type EnglishEntry,
  isBeVerb,
  beVerb,
  type BeVerb,
} from "../data/englishVerbDictionary";
import { Tense } from "../types";

type UnknownConjugation = AuxiliaryVerb | EnglishEntry | BeVerb;

const findAuxiliaryConjugation = (
  conjugation: AuxiliaryVerb,
  person: Person,
  tense: Tense,
  plurality: Plurality
) => {
  return tense === Tense.Present
    ? conjugation.presentTenseFunction(person, plurality)
    : conjugation.perfect;
};

const findBeVerbConjugation = (
  person: Person,
  tense: Tense,
  plurality: Plurality
) => {
  if (tense === Tense.Present) {
    return beVerb.presentTenseFunction(person, plurality);
  }

  return beVerb.pastTenseFunction(person, plurality);
};

const findEnglishVerbConjugation = (
  conjugation: EnglishEntry,
  person: Person,
  tense: Tense,
  plurality: Plurality
) => {
  if (tense === Tense.Present) {
    return person === Person.Third && plurality === Plurality.Singular
      ? conjugation.thirdPerson
      : conjugation.infinitive;
  }

  return conjugation.perfect;
};

export const findConjugation = (
  conjugation: UnknownConjugation,
  person: Person,
  tense: Tense,
  plurality: Plurality
) => {
  switch (true) {
    case isAuxiliaryVerb(conjugation):
      return findAuxiliaryConjugation(conjugation, person, tense, plurality);
    case isBeVerb(conjugation):
      return findBeVerbConjugation(person, tense, plurality);
    default:
      return findEnglishVerbConjugation(conjugation, person, tense, plurality);
  }
};
