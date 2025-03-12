import { PersonShorthand, Tense, type EnglishConjugatedVerb } from "./types";
import { englishVerbDictionary as englishVerbDictionary } from "./englishVerbDictionary";
import { parseEnglishTranslation } from "./parseEnglishTranslation";
import { modalMap, type auxiliaryVerb } from "./constants";

export const findVerb = (sourceString: string) => {
  const { baseVerb, particle, compliment } =
    parseEnglishTranslation(sourceString);

  const englishVerbConjugationMap = englishVerbDictionary[baseVerb];
  return { verb: englishVerbConjugationMap, particle, compliment };
};

export const conjugate = (infinitive: string) => {};

const beVerb = {
  infinitive: "be",
  pastParticiple: "been",
  presentParticiple: "being",
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
  pastParticiple: "been",
  presentParticiple: "being",
};
