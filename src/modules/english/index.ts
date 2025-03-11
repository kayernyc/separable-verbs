import { PersonShorthand, Tense, type EnglishConjugatedVerb } from "./types";
import { englishVerbDictionary as englishVerbDictionary } from "./englishVerbDictionary";
import { parseEnglishTranslation } from "./parseEnglishTranslation";

export const findVerb = (sourceString: string) => {
  const { baseVerb, particle, compliment } =
    parseEnglishTranslation(sourceString);

  const englishVerbConjugationMap = englishVerbDictionary[baseVerb];
  return { verb: englishVerbConjugationMap, particle, compliment };
};

export const conjugate = (
  infinitive: string
): EnglishConjugatedVerb | undefined => {
  if (infinitive === "be") return BeConjugation;
  const verbEntry = englishVerbDictionary[infinitive];
  if (verbEntry) {
    return {
      [Tense.Present]: {
        [PersonShorthand.First_Singular]: verbEntry.infinitive,
        [PersonShorthand.Second_Singular]: verbEntry.infinitive,
        [PersonShorthand.Third_Singular]: verbEntry.third_person,
        [PersonShorthand.First_Plural]: verbEntry.infinitive,
        [PersonShorthand.Second_Plural]: verbEntry.infinitive,
        [PersonShorthand.Third_Plural]: verbEntry.infinitive,
      },
      [Tense.Past]: {
        [PersonShorthand.First_Singular]: verbEntry.perfect,
        [PersonShorthand.Second_Singular]: verbEntry.perfect,
        [PersonShorthand.Third_Singular]: verbEntry.perfect,
        [PersonShorthand.First_Plural]: verbEntry.perfect,
        [PersonShorthand.Second_Plural]: verbEntry.perfect,
        [PersonShorthand.Third_Plural]: verbEntry.perfect,
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
    [PersonShorthand.First_Singular]: "am",
    [PersonShorthand.Second_Singular]: "are",
    [PersonShorthand.Third_Singular]: "is",
    [PersonShorthand.First_Plural]: "are",
    [PersonShorthand.Second_Plural]: "are",
    [PersonShorthand.Third_Plural]: "are",
  },
  [Tense.Past]: {
    [PersonShorthand.First_Singular]: "was",
    [PersonShorthand.Second_Singular]: "were",
    [PersonShorthand.Third_Singular]: "were",
    [PersonShorthand.First_Plural]: "were",
    [PersonShorthand.Second_Plural]: "were",
    [PersonShorthand.Third_Plural]: "were",
  },
  infinitive: "be",
  past_participle: "been",
  present_participle: "being",
};
