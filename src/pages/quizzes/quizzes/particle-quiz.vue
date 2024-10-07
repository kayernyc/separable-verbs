<script setup lang="tsx">
import germanSeparableVerbs from "@constants/germanSeparable.json";
import { computed, ref } from "vue";

import {
  RoundGenerator,
  type ResponseObject,
  type SeparableVerb,
} from "./internal/round";

const data: Record<string, SeparableVerb> = germanSeparableVerbs;
const keys = Object.keys(data);

const answered = ref(false);
let responseWord = "";

let roundObject = ref<ResponseObject | undefined>(undefined);

const TestResponse = computed(() => {
  if (!answered || roundObject === undefined || !roundObject.value) return "";

  if (responseWord === roundObject.value?.testWord) {
    return (
      <>
        <h3>Correct!</h3>
        <p>
          <span class="particle">{roundObject.value.particle}</span>
          {roundObject.value.wordBase} means {roundObject.value.testDefinition}
        </p>
      </>
    );
  } else {
    const definition = data[responseWord].translations.en;
    return (
      <>
        <h3>Incorrect</h3>
        <p>
          {roundObject.value.testWord} means {roundObject.value.testDefinition}
        </p>
      </>
    );
  }
});

function handleClick(buttonValue: string) {
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
    <p>meaning: {{ roundObject.testDefinition }}</p>
    <button
      v-for="option in roundObject.currentOptions"
      @click.stop="handleClick(option)"
      :disabled="answered"
    >
      {{ option }}
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
