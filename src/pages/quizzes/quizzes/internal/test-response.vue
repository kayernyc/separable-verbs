<script setup lang="ts">
import { GermanParticleRules } from "@/modules/german/germanConstantsstants";

import { type ResponseObject, type SeparableVerb } from "./round";

const props = defineProps<{
  roundObject: ResponseObject;
  responseWord: SeparableVerb;
}>();

const prefix =
  props.roundObject.testWord.prefix || props.roundObject.testWord.particle;

const correctResponse =
  props.roundObject.testWord.wordBase === props.responseWord.wordBase;

const roundParticleMeaning =
  GermanParticleRules[props.roundObject.testWord.particle];
const responseParticleMeaning =
  GermanParticleRules[props.responseWord.particle];
const translation = props.responseWord.translations.en.join(", ");
</script>

<template>
  <div class="response" v-if="roundParticleMeaning && responseParticleMeaning">
    <div v-if="correctResponse">
      <h3>Correct</h3>
      <p>
        <span class="particle">{{ prefix }}</span>
        | {{ roundObject.testWord.wordBase }} means: {{ translation }}
      </p>
      <p>{{ roundParticleMeaning.def }}</p>
    </div>
    <div v-else-if="roundObject.testWord.particle !== responseWord.particle">
      <h3>Incorrect</h3>
      <p>
        The correct answer is
        <span class="particle">{{ prefix }}</span>
        |
        {{ roundObject.testWord.wordBase }}
      </p>
      <p>
        <span class="particle">{{ prefix }}</span>
        | {{ roundObject.testWord.wordBase }} means: {{ translation }}
      </p>
      <details>
        <summary>More information</summary>
        <p>The correct particle is {{ roundObject.testWord.particle }}</p>
        <p>{{ roundParticleMeaning.def }}</p>
        <p>{{ responseParticleMeaning.def }}</p>
      </details>
    </div>
    <div v-else>
      <h3>Incorrect but good guess!</h3>
      <p>{{ roundObject.testWord.particle }} is the correct particle.</p>
      <p>{{ roundObject.testWord.wordBase }} is the correct base verb.</p>
    </div>
  </div>
  <div v-else-if="!roundParticleMeaning">
    {{ roundObject.testWord.particle }} is missing a def
  </div>
  <div v-else-if="!responseParticleMeaning">
    {{ props.responseWord.particle }} is missing a def
  </div>
</template>

<style scoped>
details {
  margin-block-start: 1.5rem;
}

.particle {
  color: red;
}

p {
  padding-block-start: 0.75rem;
}

.response {
  flex-basis: 100%;
}
</style>
