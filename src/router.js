import { createRouter, createWebHashHistory } from 'vue-router'

import test from "./views/test.vue"

const routes = [
    {
      path: "/",
      name: "test",
      component: test,
      title: "test"
    }
  ]

const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
