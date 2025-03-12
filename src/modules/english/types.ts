import { Gender, Person, Plurality, type Pronoun } from "../common/types";

export type EnglishKeyedWord = {
  terminalVerb: string;
  infinitive: string;
  tense: Tense;
  aspect: Aspect;
  pronoun: Pronoun;
  particle?: string;
};

export type ParsedTranslation = {
  baseVerb: string;
  particle?: string;
  compliment?: string;
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

export const findPronoun = (pronoun: Pronoun): Pronoun => {
  if (pronoun.person === Person.Second) return { person: Person.Second };
  if (pronoun.person === Person.First) {
    return pronoun.plurality === Plurality.Singular
      ? { person: Person.First, plurality: Plurality.Singular }
      : { person: Person.First, plurality: Plurality.Plural };
  }

  if (pronoun.plurality === Plurality.Plural)
    return { person: Person.Third, plurality: Plurality.Plural };

  switch (pronoun.gender) {
    case Gender.Neuter:
      return {
        person: Person.Third,
        plurality: Plurality.Singular,
        gender: Gender.Neuter,
      };
    case Gender.Feminine:
      return {
        person: Person.Third,
        plurality: Plurality.Singular,
        gender: Gender.Feminine,
      };
    default:
      return {
        person: Person.Third,
        plurality: Plurality.Singular,
        gender: Gender.Masculine,
      };
  }
};

export const findPersonSubject = (pronoun: Pronoun) => {
  if (pronoun.person === Person.Second) return "you";
  if (pronoun.person === Person.First) {
    return pronoun.plurality === Plurality.Singular ? "I" : "we";
  }

  if (pronoun.plurality === Plurality.Plural) return "they";

  switch (pronoun.gender) {
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
  pastParticiple: string | null;
  presentParticiple: string | null;
  perfect: string;
  third_person: string;
};

export type EnglishConjugatedVerb = {
  [key in Tense]: {
    [key in PersonShorthand]: string;
  };
} & {
  infinitive: string;
  pastParticiple: string | null;
  presentParticiple: string | null;
};
