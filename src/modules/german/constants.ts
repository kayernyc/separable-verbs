import { PersonShorthand, Tense, type GermanVerb } from "./types";

const validTenses: string[] = [
  "PRASENS",
  "PRATERITUM",
  "FUTUR1",
  "PERFEKT",
  "PLUSQUAMPERFEKT",
  "FUTUR2",
  "KONJUNKTIV1_PRASENS",
  "KONJUNKTIV1_FUTUR1",
  "KONJUNKTIV1_PERFEKT",
  "KONJUNKTIV2_PRATERITUM",
  "KONJUNKTIV2_FUTUR1",
  "KONJUNKTIV2_FUTUR2",
];

const seinConjugation: GermanVerb = {
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

const habenConjugation: GermanVerb = {
  [Tense.PRASENS]: {
    [PersonShorthand.First_Singular]: "habe",
    [PersonShorthand.Second_Singular]: "hast",
    [PersonShorthand.Third_Singular]: "hat",
    [PersonShorthand.First_Plural]: "haben",
    [PersonShorthand.Second_Plural]: "haben",
    [PersonShorthand.Second_Plural_Familiar]: "habt",
    [PersonShorthand.Third_Plural]: "haben",
  },
  [Tense.PRATERITUM]: {
    [PersonShorthand.First_Singular]: "hatte",
    [PersonShorthand.Second_Singular]: "hattest",
    [PersonShorthand.Third_Singular]: "hatte",
    [PersonShorthand.First_Plural]: "hatten",
    [PersonShorthand.Second_Plural]: "hatten",
    [PersonShorthand.Second_Plural_Familiar]: "hattet",
    [PersonShorthand.Third_Plural]: "hatten",
  },
  infinitive: "haben",
  hilfsverb: "haben",
  partizipII: "gehabt",
};

const werdenConjugation: GermanVerb = {
  [Tense.PRASENS]: {
    [PersonShorthand.First_Singular]: "werde",
    [PersonShorthand.Second_Singular]: "wirst",
    [PersonShorthand.Third_Singular]: "wird",
    [PersonShorthand.First_Plural]: "werden",
    [PersonShorthand.Second_Plural]: "werden",
    [PersonShorthand.Second_Plural_Familiar]: "werdet",
    [PersonShorthand.Third_Plural]: "werden",
  },
  [Tense.PRATERITUM]: {
    [PersonShorthand.First_Singular]: "wurde",
    [PersonShorthand.Second_Singular]: "wurdest",
    [PersonShorthand.Third_Singular]: "wurde",
    [PersonShorthand.First_Plural]: "wurden",
    [PersonShorthand.Second_Plural]: "wurden",
    [PersonShorthand.Second_Plural_Familiar]: "wurdet",
    [PersonShorthand.Third_Plural]: "wurden",
  },
  infinitive: "werden",
  hilfsverb: "sein",
  partizipII: "geworden",
};

/*
To form the present participle in German, add the ending "-end" to the stem of a regular verb, or simply add "-d" to the infinitive form of the verb; for example, "lesen" (to read) becomes "lesend" (reading). 
/*
// Infinitive,Präsens_ich,Präsens_du,"Präsens_er, sie, es",Präteritum_ich,Partizip II,Konjunktiv II_ich,Imperativ Singular,Imperativ Plural,Hilfsverb
export interface VerbInfo {
  EIZ?: string;
  Partizip1?: string; // present participle
  Partizip2?: string[]; // past participle
  Infinitive?: string;
  Imperativ?: VerbInfoImp;
  Konjunktiv1?: VerbInfoTense;
  Konjunktiv2?: VerbInfoTense;
  Präteritum?: VerbInfoTense;
  PRT?: VerbInfoTense;
}
export interface VerbsInfo {
  [key: string]: VerbInfo;
}

export type PronominalCase = "ACCUSATIVE" | "DATIVE";
export type GermanAux = "SEIN" | "HABEN";

*/
