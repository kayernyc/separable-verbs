export type SupportedLanguage = "de" | "en";

export type VariationWord = {
  [key: string]: {
    language?: string;
    translations?: { [key in SupportedLanguage]: string[] };
    complements?: {};
    particles?: {};
    wordBase?: string;
  };
};

export type Word = Exclude<VariationWord, "complements" | "particle"> & {
  language: SupportedLanguage;
  complements?: VariationWord[];
  particles?: VariationWord[];
};

export interface KeyDictionary {
  [key: string]: VariationWord | Word;
}

export enum Person {
  First = "first",
  Second = "second",
  Third = "third",
}

export enum Plurality {
  Singular = "singular",
  Plural = "plural",
}

export enum Gender {
  Masculine = "masculine",
  Feminine = "feminine",
  Neuter = "neuter",
}

export enum Formality {
  Formal = "formal",
  Informal = "informal",
}

export type Pronoun = {
  person?: Person;
  plurality?: Plurality;
  formality?: Formality;
  gender?: Gender;
};
