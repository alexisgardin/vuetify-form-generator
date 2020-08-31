import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layout/Layout.vue";
import Home from "@/components/Home.vue";
import BaseForm from "@/components/BaseForm.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: Home
      },
      {
        path: "base",
        name: "BaseForm",
        component: BaseForm
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
