import QuizLayout from "@/layouts/QuizLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

const quizzesConfiguration = routes.find((route) => route.path === "/quizzes");

quizzesConfiguration.component = QuizLayout;

const router = createRouter({
  history: createWebHistory(),
  routes,
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
