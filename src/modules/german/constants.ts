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
