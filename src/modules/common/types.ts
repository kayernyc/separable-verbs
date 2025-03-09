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
