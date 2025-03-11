import { Person, Tense, type GermanConjugatedVerb } from "./types";

export const conjugate = (
  infinitive: string
): GermanConjugatedVerb | undefined => {
  if (infinitive === "sein") return seinConjugation;

  return;
};

const seinConjugation: GermanConjugatedVerb = {
  [Tense.PRASENS]: {
    [Person.First_Singular]: "bin",
    [Person.Second_Singular]: "bist",
    [Person.Third_Singular]: "ist",
    [Person.First_Plural]: "sind",
    [Person.Second_Plural]: "sind",
    [Person.Second_Plural_Familiar]: "seid",
    [Person.Third_Plural]: "sind",
  },
  [Tense.PRATERITUM]: {
    [Person.First_Singular]: "war",
    [Person.Second_Singular]: "warst",
    [Person.Third_Singular]: "war",
    [Person.First_Plural]: "waren",
    [Person.Second_Plural]: "waren",
    [Person.Second_Plural_Familiar]: "wart",
    [Person.Third_Plural]: "waren",
  },
  infinitive: "sein",
  hilfsverb: "haben",
  partizipII: "gewesen",
};
