import {
  PersonShorthand as EnglishPerson,
  type EnglishWord,
} from "../english/types";
import { Person as GermanPerson, type GermanWord } from "../german/types";

export const germanToEnglishWord = (
  germanWord: GermanWord
): EnglishWord | undefined => {
  return;
};

const germanToEnglishPronouns = {
  [GermanPerson.First_Singular]: [EnglishPerson.First_Singular],
  [GermanPerson.Second_Singular]: [EnglishPerson.Second_Singular],
  [GermanPerson.Third_Singular]: [EnglishPerson.Third_Singular],
};
