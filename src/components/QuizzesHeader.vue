<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/quizzes/">home</RouterLink>
    <RouterLink to="/quizzes/quizzes/particle-quiz">particle quiz</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-transform: capitalize;
}
</style>
