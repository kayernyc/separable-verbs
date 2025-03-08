import { Person, Tense, type GermanVerb } from "./types";

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

const habenConjugation: GermanVerb = {
  [Tense.PRASENS]: {
    [Person.First_Singular]: "habe",
    [Person.Second_Singular]: "hast",
    [Person.Third_Singular]: "hat",
    [Person.First_Plural]: "haben",
    [Person.Second_Plural]: "haben",
    [Person.Second_Plural_Familiar]: "habt",
    [Person.Third_Plural]: "haben",
  },
  [Tense.PRATERITUM]: {
    [Person.First_Singular]: "hatte",
    [Person.Second_Singular]: "hattest",
    [Person.Third_Singular]: "hatte",
    [Person.First_Plural]: "hatten",
    [Person.Second_Plural]: "hatten",
    [Person.Second_Plural_Familiar]: "hattet",
    [Person.Third_Plural]: "hatten",
  },
  infinitive: "haben",
  hilfsverb: "haben",
  partizipII: "gehabt",
};

const werdenConjugation: GermanVerb = {
  [Tense.PRASENS]: {
    [Person.First_Singular]: "werde",
    [Person.Second_Singular]: "wirst",
    [Person.Third_Singular]: "wird",
    [Person.First_Plural]: "werden",
    [Person.Second_Plural]: "werden",
    [Person.Second_Plural_Familiar]: "werdet",
    [Person.Third_Plural]: "werden",
  },
  [Tense.PRATERITUM]: {
    [Person.First_Singular]: "wurde",
    [Person.Second_Singular]: "wurdest",
    [Person.Third_Singular]: "wurde",
    [Person.First_Plural]: "wurden",
    [Person.Second_Plural]: "wurden",
    [Person.Second_Plural_Familiar]: "wurdet",
    [Person.Third_Plural]: "wurden",
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
