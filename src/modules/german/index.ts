import { PersonShorthand, Tense, type GermanConjugatedVerb } from "./types";

const seinConjugation: GermanConjugatedVerb = {
  [Tense.PRASENS]: {
    [PersonShorthand.First_Singular]: "bin",
    [PersonShorthand.Second_Singular]: "bist",
    [PersonShorthand.Third_Singular]: "ist",
    [PersonShorthand.First_Plural]: "sind",
    [PersonShorthand.Second_Plural]: "sind",
    [PersonShorthand.Second_Plural_Familiar]: "seid",
    [PersonShorthand.Third_Plural]: "sind",
  },
  [Tense.PRATERITUM]: {
    [PersonShorthand.First_Singular]: "war",
    [PersonShorthand.Second_Singular]: "warst",
    [PersonShorthand.Third_Singular]: "war",
    [PersonShorthand.First_Plural]: "waren",
    [PersonShorthand.Second_Plural]: "waren",
    [PersonShorthand.Second_Plural_Familiar]: "wart",
    [PersonShorthand.Third_Plural]: "waren",
  },
  infinitive: "sein",
  hilfsverb: "haben",
  partizipII: "gewesen",
};
