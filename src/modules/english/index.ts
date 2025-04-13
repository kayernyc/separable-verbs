import { findPersonSubject, PersonShorthand, Tense } from "./types";
import {
  englishVerbDictionary,
  findEnglishVerbEntry,
} from "./data/englishVerbDictionary";
import { parseEnglishTranslation } from "./parseEnglishTranslation";
import englishKeyDictionary from "./data/englishVerbKeyMap.json";
import {
  type KeyDictionary,
  type Pronoun,
  Gender,
  Person,
  Plurality,
} from "../common/types";
import { findConjugation } from "./conjugation";

const keyDictionary: KeyDictionary =
  englishKeyDictionary as unknown as KeyDictionary;

export const findVerb = (sourceString: string) => {
  const { baseVerb, particle, compliment } =
    parseEnglishTranslation(sourceString);

  const englishVerbConjugationMap = englishVerbDictionary[baseVerb];
  return { verb: englishVerbConjugationMap, particle, compliment };
};

const allEnglishKeys = Object.keys(englishKeyDictionary);

const personShorthandArray = [
  PersonShorthand.First_Plural,
  PersonShorthand.Second_Singular,
  PersonShorthand.Third_Singular,
  PersonShorthand.First_Singular,
  PersonShorthand.Second_Plural,
  PersonShorthand.Third_Plural,
];

const tenseArray = [Tense.Past, Tense.Present];

const genderArray = [Gender.Feminine, Gender.Masculine, Gender.Neuter];

const pluralityArray = [Plurality.Plural, Plurality.Singular];

const getRandomArrayValue = <T>(array: T[]): T =>
  array[Math.floor(array.length * Math.random())];

/*

For generating the prompt
This will eventually take a config 
for verb subsets, persons, and tense

returns person, tense, translation strings 
*/
export const generateTestObject = () => {
  // get the verb from english key dictionary
  const verbKey =
    allEnglishKeys[Math.floor(allEnglishKeys.length * Math.random())];
  const verbSourceObject = keyDictionary[verbKey];

  if (!verbSourceObject) throw Error(`No entry found for ${verbKey}`);
  const { wordBase } = verbSourceObject;

  if (!wordBase || typeof wordBase !== "string") {
    throw Error(`No base verb found for ${verbKey}`);
  }

  // get word base conjugation
  const englishVerbConjugationMap = englishVerbDictionary[wordBase];
  if (!englishVerbConjugationMap) throw Error(`No entry found for ${wordBase}`);

  // get the person, gender and tense

  const gender = getRandomArrayValue(genderArray);
  const tense = getRandomArrayValue(tenseArray);
  const person = getRandomArrayValue([
    Person.First,
    Person.Second,
    Person.Third,
  ]);
  const plurality = getRandomArrayValue(pluralityArray);

  console.log({ englishVerbConjugationMap, person, tense, gender });
  const conjugation = findEnglishVerbEntry(
    englishVerbConjugationMap.infinitive
  );
  console.log({ conjugation });
  const pronoun: Pronoun = {
    person,
    plurality,
    gender,
  };

  console.log(findConjugation(conjugation, person));

  const pronounString = findPersonSubject(pronoun);
  console.log(pronounString);
};
