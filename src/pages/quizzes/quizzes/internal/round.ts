import germanSeparableVerbs from "@constants/germanSeparable.json";

export interface SeparableVerb {
  language: string;
  particle: string;
  wordBase: string;
  translations: {
    en: string[];
  };
}

export interface ResponseObject {
  testWord: SeparableVerb;
  currentOptions: SeparableVerb[];
}

const data: Record<string, SeparableVerb> = germanSeparableVerbs;
const keys = Object.keys(data);

export function RoundGenerator(): ResponseObject {
  const wordIndex = keys[Math.floor(Math.random() * keys.length)];
  const currentTest: SeparableVerb = data[wordIndex];
  const currentOptions = [currentTest];

  while (currentOptions.length < 4) {
    const wordIndex = keys[Math.floor(Math.random() * keys.length)];
    const option = data[wordIndex];

    if (!currentOptions.includes(option)) {
      if (Math.random() > 0.5) {
        currentOptions.push(option);
      } else {
        currentOptions.unshift(option);
      }
    }
  }

  return {
    testWord: currentTest,
    currentOptions,
  };
}
