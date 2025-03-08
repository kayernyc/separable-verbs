import { Person, Tense, type EnglishVerb } from "./types";
import { EnglishVerbDictionary } from "./englishVerbDictionary";

export const conjugate = (infinitive: string): EnglishVerb | undefined => {
  if (infinitive === "be") return BeConjugation;
  const verbEntry = EnglishVerbDictionary[infinitive];
  if (verbEntry) {
    return {
      [Tense.Present]: {
        [Person.First_Singular]: verbEntry.infinitive,
        [Person.Second_Singular]: verbEntry.infinitive,
        [Person.Third_Singular]: verbEntry.third_person,
        [Person.First_Plural]: verbEntry.infinitive,
        [Person.Second_Plural]: verbEntry.infinitive,
        [Person.Third_Plural]: verbEntry.infinitive,
      },
      [Tense.Past]: {
        [Person.First_Singular]: verbEntry.perfect,
        [Person.Second_Singular]: verbEntry.perfect,
        [Person.Third_Singular]: verbEntry.perfect,
        [Person.First_Plural]: verbEntry.perfect,
        [Person.Second_Plural]: verbEntry.perfect,
        [Person.Third_Plural]: verbEntry.perfect,
      },
      infinitive: infinitive,
      past_participle: verbEntry.past_participle,
      present_participle: verbEntry.present_participle,
    };
  }
};

const beVerb = {
  infinitive: "be",
  past_participle: "been",
  present_participle: "being",
  perfect: "am",
  third_person: "are",
  singular_third: "is",
  past_first_person_singular: "was",
  past_all_others: "were",
};

const BeConjugation = {
  [Tense.Present]: {
    [Person.First_Singular]: "am",
    [Person.Second_Singular]: "are",
    [Person.Third_Singular]: "is",
    [Person.First_Plural]: "are",
    [Person.Second_Plural]: "are",
    [Person.Third_Plural]: "are",
  },
  [Tense.Past]: {
    [Person.First_Singular]: "was",
    [Person.Second_Singular]: "were",
    [Person.Third_Singular]: "were",
    [Person.First_Plural]: "were",
    [Person.Second_Plural]: "were",
    [Person.Third_Plural]: "were",
  },
  infinitive: "be",
  past_participle: "been",
  present_participle: "being",
};
