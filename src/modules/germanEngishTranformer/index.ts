import { Person, type Pronoun } from "../common/types";
import {
  PersonShorthand as EnglishPerson,
  findPronoun as findEnglishPronoun,
  type EnglishWord,
} from "../english/types";
import {
  PersonShorthand as GermanPerson,
  type GermanWord,
  type SeparableVerb,
} from "../german/types";

export const germanToEnglishWord = ({
  germanSeparable,
  germanVerb,
}: {
  germanSeparable: SeparableVerb;
  germanVerb: GermanWord;
}): EnglishWord | undefined => {
  // Find all pronoun cases
  const englishPronouns = [findEnglishPronoun(germanVerb.pronoun)];

  // Find all possible verb cases

  return;
};
