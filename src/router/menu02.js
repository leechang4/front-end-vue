export default [
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
  {
    path: "/menu02/exam07template",
    component: () => import(/* webpackChunkName: "menu02" */ "../views/menu02/Exam07Template"),
  },
];
