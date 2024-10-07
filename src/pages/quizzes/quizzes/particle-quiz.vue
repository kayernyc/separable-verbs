<script setup lang="tsx">
import germanSeparableVerbs from "@constants/germanSeparable.json";
import { computed, ref } from "vue";

import {
  RoundGenerator,
  type ResponseObject,
  type SeparableVerb,
} from "./internal/round";

const data: Record<string, SeparableVerb> = germanSeparableVerbs;

const answered = ref(false);
let responseWord: SeparableVerb;

let roundObject = ref<ResponseObject | undefined>(undefined);

const TestResponse = computed(() => {
  if (!answered || roundObject === undefined || !roundObject.value) return "";
  const translation = responseWord.translations.en.join(",");
  const testWord: SeparableVerb = roundObject.value.testWord;

  if (responseWord === roundObject.value?.testWord) {
    return (
      <>
        <h3>Correct!</h3>
        <p>
          <span class="particle">{testWord.particle}</span>
          {testWord.wordBase} means {testWord.translations.en}
        </p>
      </>
    );
  } else {
    const guessedWord = `${responseWord.particle}${responseWord.wordBase}`;
    const correctWord = `${testWord.particle}${testWord.wordBase}`;
    return (
      <>
        <h3>Incorrect</h3>
        <p>
          {guessedWord} means {translation}
        </p>
        <p>{correctWord} was the correct verb.</p>
      </>
    );
  }
});

function handleClick(buttonValue: SeparableVerb) {
  answered.value = true;
  responseWord = buttonValue;
}

function nextRound() {
  answered.value = false;
  roundObject.value = RoundGenerator();
  console.log(roundObject.value);
}

nextRound();
</script>

<template>
  <div v-if="roundObject">
    <TestResponse v-if="answered" />
    <p>meaning: {{ roundObject.testWord.translations.en.join(",") }}</p>
    <button
      v-for="option in roundObject.currentOptions"
      @click.stop="handleClick(option)"
      :disabled="answered"
    >
      {{ option.particle }}|{{ option.wordBase }}
    </button>
    <button v-if="answered" @click.stop="nextRound">Next</button>
  </div>
</template>

<style scoped>
.particle {
  color: red;
}

div {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & p {
    flex-basis: 100%;
  }

  & button {
    padding: 0.75rem;
    display: inline-block;
  }
}
</style>
