import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam01View"),
  },
  {
    path: "/menu01/exam02view",
    name: "menu01_exam02view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam02View"),
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam03View"),
    children: [
      {
        path: "subacomponent",
        component: () =>
          import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent"),
      },
      {
        path: "subbcomponent",
        component: () =>
          import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent"),
      },
    ],
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam04View"), //이런경우는 잘 없음 알아두기만 하자
    children: [
      // 중첩된거를 쓸려면 children 만들어줘야함
      {
        path: "",
        components: {
          default: () =>
            import(/* webpackChunkName: "menu01" */ "../components/menu01/SubAComponent"),
          rv1: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubBComponent"),
          rv2: () => import(/* webpackChunkName: "menu01" */ "../components/menu01/SubCComponent"),
        },
      },
    ],
  },
  {
    path: "/menu01/exam05view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam05View"),
  },
  {
    path: "/menu01/exam06view/:bno",
    name: "menu01_exam06view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam06View"),
    props: true,
  },
  {
    path: "/menu01/exam07view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam07View"),
    props: { kind: "freeboard", color: "blue" },
  },
  {
    path: "/menu01/exam08view",
    name: "menu01_exam08view",
    component: () => import(/* webpackChunkName: "menu01" */ "../views/menu01/Exam08View"),
    //괄호를 붙이는게 리턴 값임
    props: route => ({
      kind: route.query.kind, // 라우트는 화면이 이동할때 시작된다.
      color: route.query.color,
    }),
  },
  {
    path: "/menu02/exam01Expressions",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam01Expressions"),
  },

  {
    path: "/menu02/exam02Directives",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam02Directives"),
  },
  {
    path: "/menu02/exam03AttrBinding",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam03AttrBinding"),
  },
  {
    path: "/menu02/exam04formbinding",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam04FormBinding"),
  },
  {
    path: "/menu02/exam05forrepeatbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam05ForRepeatBinding"),
  },
  {
    path: "/menu02/exam06computedbinding",
    component: () =>
      import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam06ComputedBinding"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
