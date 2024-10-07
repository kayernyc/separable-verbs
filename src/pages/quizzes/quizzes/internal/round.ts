import germanSeparableVerbs from "@constants/germanSeparable.json";

export interface SeparableVerb {
  language: string;
  translations: {
    en: string | string[];
  };
}

export interface ResponseObject {
  testWord: string;
  particle: string;
  wordBase: string;
  testDefinition: string | string[];
  currentOptions: string[];
}

const data: Record<string, SeparableVerb> = germanSeparableVerbs;
const keys = Object.keys(data);

export function RoundGenerator(): ResponseObject {
  const testWord = keys[Math.floor(Math.random() * keys.length)];
  const particle = testWord.slice(0, testWord.indexOf("|"));
  const wordBase = testWord.slice(testWord.indexOf("|") + 1);
  const currentTest: SeparableVerb = data[testWord];
  const currentOptions = [testWord];

  while (currentOptions.length < 4) {
    const option = keys[Math.floor(Math.random() * keys.length)];
    if (!currentOptions.includes(option)) {
      if (Math.random() > 0.5) {
        currentOptions.push(option);
      } else {
        currentOptions.unshift(option);
      }
    }
  }

  return {
    testWord,
    particle,
    wordBase,
    testDefinition: currentTest.translations.en,
    currentOptions,
  };
}
