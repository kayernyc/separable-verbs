import type { Person } from "@/modules/common/types";
import {
  type AuxiliaryVerb,
  isAuxiliaryVerb,
  type EnglishEntry,
  type BeVerb,
  isBeVerb,
} from "../data/englishVerbDictionary";

type UnknownConjugation = AuxiliaryVerb | EnglishEntry | unknown;

export const findConjugation = (
  conjugation: UnknownConjugation,
  person: Person
) => {
  switch (true) {
    case isAuxiliaryVerb(conjugation):
      return "aux";
    case isBeVerb(conjugation):
      return "be";
    default:
      return "regular case";
  }
};
