import {
  Formality,
  Gender,
  Person,
  Plurality,
  type Pronoun,
} from "../common/types";

export type GermanWord = {
  terminalVerb: string;
  infinitive: string;
  tense: Tense;
  pronoun: Pronoun;
};

export interface GermanKeyedVerb {
  language: string;
  prefix?: string;
  particle: string;
  wordBase: string;
  translations: {
    en: string[];
  };
}

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

export enum PersonShorthand {
  First_Singular,
  Second_Singular,
  Third_Singular,
  First_Plural,
  Second_Plural,
  Second_Plural_Familiar,
  Third_Plural,
}

export type GermanConjugatedVerb = {
  [Tense.PRASENS]: {
    [key in PersonShorthand]: string;
  };
  [Tense.PRATERITUM]: {
    [key in PersonShorthand]: string;
  };
  infinitive: string;
  hilfsverb: string;
  partizipII: string;
};

export const findPersonSubject = (pronounFeatures: Pronoun) => {
  if (pronounFeatures.person === Person.First) {
    return pronounFeatures.plurality === Plurality.Singular ? "ich" : "wir";
  }

  if (pronounFeatures.person === Person.Second) {
    if (pronounFeatures.formality === Formality.Formal) return "Sie";

    return pronounFeatures.plurality === Plurality.Plural ? "ihr" : "du";
  }

  if (
    pronounFeatures.plurality === Plurality.Plural ||
    (pronounFeatures.plurality === Plurality.Singular &&
      pronounFeatures.gender === Gender.Feminine)
  ) {
    return "sie";
  }

  return pronounFeatures.gender === Gender.Masculine ? "er" : "es";
};
