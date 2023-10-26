import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/*  webpackChunkName:"Home"*/ "../views/HomePage.vue")
  },
  {
    path: "/Planes",
    name: "planes",
    component: () =>
      import(/*  webpackChunkName:"compara"*/ "../views/ComparaPage.vue")
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: () =>
      import(/*  webpackChunkName:"contacto"*/ "../views/ContactoPage.vue")
  },
  {
    path: "/Terminosycondiciones",
    name: "terminos",
    component: () =>
      import(/* webpackChunkName:"terminos"*/ "../views/TerminosPage.vue")
  },
  {
    path: "/Avisodeprivacidad",
    name: "aviso",
    component: () =>
      import(/* webpackChunkName:"aviso"*/ "../views/PoliticasPage.vue")
  },
  {
    path: "*",
    name: "Default",
    component: () =>
      import(/*  webpackChunkName:"Home2"*/ "../views/HomePage.vue")
  } /*,
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/About.vue")
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
