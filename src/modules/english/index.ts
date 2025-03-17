import { PersonShorthand, Tense, type EnglishConjugatedVerb } from "./types";
import { englishVerbDictionary } from "./englishVerbDictionary";
import { parseEnglishTranslation } from "./parseEnglishTranslation";
import englishKeyDictionary from "./englishVerbKeyMap.json";
import type { KeyDictionary } from "../common/types";

const keyDictionary: KeyDictionary =
  englishKeyDictionary as unknown as KeyDictionary;

export const findVerb = (sourceString: string) => {
  const { baseVerb, particle, compliment } =
    parseEnglishTranslation(sourceString);

  const englishVerbConjugationMap = englishVerbDictionary[baseVerb];
  return { verb: englishVerbConjugationMap, particle, compliment };
};

const allEnglishKeys = Object.keys(englishKeyDictionary);

const PersonShorthandArray = [
  PersonShorthand.First_Plural,
  PersonShorthand.Second_Singular,
  PersonShorthand.Third_Singular,
  PersonShorthand.First_Singular,
  PersonShorthand.Second_Plural,
  PersonShorthand.Third_Plural,
];

/*

For generating the prompt
This will eventually take a config 
for verb subsets, persons, and tense

returns person, tense, translation strings 
*/
export const generateTestObject = () => {
  // get the verb from english key dictionary
  const verbKey =
    allEnglishKeys[Math.round(allEnglishKeys.length * Math.random())];
  const verbSourceObject = keyDictionary[verbKey];

  if (!verbSourceObject) throw Error(`No entry found for ${verbKey}`);
  const { wordBase } = verbSourceObject;

  if (!wordBase || typeof wordBase !== "string") {
    throw Error(`No base verb found for ${verbKey}`);
  }

  // get word base conjugation
  const englishVerbConjugationMap = englishVerbDictionary[wordBase];
  if (!englishVerbConjugationMap) throw Error(`No entry found for ${wordBase}`);

  // get the person
  const person =
    PersonShorthandArray[
      Math.round(PersonShorthandArray.length * Math.random())
    ];

  console.log({ englishVerbConjugationMap, person });
  // get the tense

  // generate a prompt string
};

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
