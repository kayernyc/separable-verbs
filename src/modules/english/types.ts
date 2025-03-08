import { Gender, Person, Plurality, type Pronoun } from "../common/types";

export type EnglishWord = {
  terminalVerb: string;
  infinitive: string;
  tense: Tense;
  aspect: Aspect;
  person: PersonShorthand;
};

export enum Aspect {
  Simple = "simple",
  Progressive = "progressive",
  Perfect = "perfect",
  PerfectProgressive = "perfect progressive",
}

export enum Tense {
  Present = "present",
  Past = "past",
  // Future = "future",
  // Conditional = "conditional",
}

export const findPersonSubject = (pronounFeatures: Pronoun) => {
  if (pronounFeatures.person === Person.Second) return "you";
  if (pronounFeatures.person === Person.First) {
    return pronounFeatures.plurality === Plurality.Singular ? "I" : "we";
  }

  if (pronounFeatures.plurality === Plurality.Plural) return "they";

  switch (pronounFeatures.gender) {
    case Gender.Neuter:
      return "it";
    case Gender.Feminine:
      return "she";
    case Gender.Masculine:
      return "he";
  }
};

export enum PersonShorthand {
  First_Singular,
  Second_Singular,
  Third_Singular,
  First_Plural,
  Second_Plural,
  Third_Plural,
}

export type VerbData = {
  infinitive: string;
  past_participle: string | null;
  present_participle: string | null;
  perfect: string;
  third_person: string;
};

export type EnglishVerb = {
  [key in Tense]: {
    [key in PersonShorthand]: string;
  };
} & {
  infinitive: string;
  past_participle: string | null;
  present_participle: string | null;
};
