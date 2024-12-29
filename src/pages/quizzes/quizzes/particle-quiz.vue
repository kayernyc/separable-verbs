<script setup lang="tsx">
import { ref } from "vue";

import {
  RoundGenerator,
  type ResponseObject,
  type SeparableVerb,
} from "./internal/round";

import testResponse from "./internal/test-response.vue";

const answered = ref(false);
let responseWord: SeparableVerb;

let roundObject = ref<ResponseObject | undefined>(undefined);

function handleClick(buttonValue: SeparableVerb) {
  responseWord = buttonValue;
  answered.value = true;
}

function nextRound() {
  answered.value = false;

  roundObject.value = RoundGenerator();
}

nextRound();
</script>

<template>
  <div v-if="roundObject">
    <testResponse
      v-if="answered && roundObject && responseWord"
      :roundObject="roundObject"
      :responseWord="responseWord"
    />
    <p class="question" v-if="!answered">
      meaning: {{ roundObject.testWord.translations.en.join(", ") }}
    </p>
    <button
      v-for="option in roundObject.currentOptions"
      @click.stop="handleClick(option)"
      :disabled="answered"
    >
      {{ option.prefix || option.particle }}|{{ option.wordBase }}
    </button>
    <button v-if="answered" @click.stop="nextRound">Next</button>
  </div>
</template>

<style scoped>
.question {
  border-bottom: 1px black solid;
}

div {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & p {
    flex-basis: 100%;
    padding: 0.5rem 0;
  }

  & button {
    padding: 0.75rem;
    display: inline-block;
  }
}
</style>
