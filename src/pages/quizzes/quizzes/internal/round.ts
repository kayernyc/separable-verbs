import type { GermanKeyedVerb } from "@/modules/german/types";
import germanSeparableVerbs from "@/modules/german/germanKeyDictionary.json";

export interface ResponseObject {
  testWord: GermanKeyedVerb;
  currentOptions: GermanKeyedVerb[];
}

const data: Record<string, GermanKeyedVerb> = germanSeparableVerbs;
const keys = Object.keys(data);

export function RoundGenerator(): ResponseObject {
  const wordIndex = keys[Math.floor(Math.random() * keys.length)];
  const currentTest: GermanKeyedVerb = data[wordIndex];
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
