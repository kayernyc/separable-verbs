<script setup lang="ts">
import AppHeader from "@/components/QuizzesHeader.vue";
</script>

<template>
  <main>
    <AppHeader />
    <RouterView />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

nav::v-deep {
  flex: 0 0 15ch;
}

main > :nth-child(2) {
  flex-basis: calc(100% - 15ch - 1rem);
}
</style>
