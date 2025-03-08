export enum Tense {
  PRASENS = "PRASENS",
  PRATERITUM = "PRATERITUM",
  FUTUR1 = "FUTUR1",
  PERFEKT = "PERFEKT",
  PLUSQUAMPERFEKT = "PLUSQUAMPERFEKT",
  FUTUR2 = "FUTUR2",
  KONJUNKTIV1_PRASENS = "KONJUNKTIV1_PRASENS",
  KONJUNKTIV1_FUTUR1 = "KONJUNKTIV1_FUTUR1",
  KONJUNKTIV1_PERFEKT = "KONJUNKTIV1_PERFEKT",
  KONJUNKTIV2_PRATERITUM = "KONJUNKTIV2_PRATERITUM",
  KONJUNKTIV2_FUTUR1 = "KONJUNKTIV2_FUTUR1",
  KONJUNKTIV2_FUTUR2 = "KONJUNKTIV2_FUTUR2",
}

export enum Person {
  First_Singular,
  Second_Singular,
  Third_Singular,
  First_Plural,
  Second_Plural,
  Second_Plural_Familiar,
  Third_Plural,
}

export type GermanVerb = {
  [Tense.PRASENS]: {
    [key in Person]: string;
  };
  [Tense.PRATERITUM]: {
    [key in Person]: string;
  };
  infinitive: string;
  hilfsverb: string;
  partizipII: string;
};
