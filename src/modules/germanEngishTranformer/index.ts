import { type Pronoun } from "../common/types";
import type { EnglishEntry } from "../english/englishVerbDictionary";
import {
  PersonShorthand as EnglishPerson,
  findPronoun as findEnglishPronoun,
  type EnglishKeyedWord,
} from "../english/types";
import {
  PersonShorthand as GermanPerson,
  type GermanWord,
  type GermanKeyedVerb,
} from "../german/types";

import { findVerb } from "@/modules/english";

type EnglishResult = {
  verb: EnglishEntry;
  particle?: string;
  compliment?: string;
};

export const germanToEnglishWord = ({
  germanKeyedVerb,
  germanWord,
}: {
  germanKeyedVerb: GermanKeyedVerb;
  germanWord: GermanWord;
}): [Pronoun[], Set<EnglishResult>] | undefined => {
  // Find all pronoun cases
  const englishPronouns = [findEnglishPronoun(germanWord.pronoun)];

  // Find all translations
  const verbConjugations = new Set<EnglishResult>();
  for (const translation of germanKeyedVerb.translations.en) {
    const foundVerb = findVerb(translation);
    verbConjugations.add(foundVerb);
  }

  return [englishPronouns, verbConjugations];
};
