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

export enum Person {
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
    [key in Person]: string;
  };
} & {
  infinitive: string;
  past_participle: string | null;
  present_participle: string | null;
};
