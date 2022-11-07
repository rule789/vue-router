import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import sourceData from '@/data.json'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    alias: '/home'
  },
  {
    path: "/protected",
    name: "protected",
    components: {
      default: () => import( "../views/ProtectedView.vue"),
      LeftSidebar: () => import("../components/LeftSidebar.vue")
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/invoice",
    name: "invoice",
    components: {
      default: () => import( "../views/InvoiceView.vue"),
      LeftSidebar: () => import("../components/LeftSidebar.vue")
    },
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import( "../views/LoginView.vue"),
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import("@/views/DestinationShow.vue"),
    beforeEnter: (to) => {
        const exist = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
        if(!exist){
          // 傳到 not found
          return {
            name: 'NotFound',
            // 保留當前路徑並刪除第一個字符，以避免目標 ＵＲＬ以 `//` 開頭
            params: {pathMatch: to.path.split('/').slice(1)},
            // 保留現有的查詢和 hash 值，如果有的話
            query: to.query,
            hash: to.hash
          }
        }
    },
    children: [{
      path: '/destination/:id/:slug/:experienceSlug',
      name: 'experience.show',
      component: () => import("@/views/ExperienceShow.vue"),
      props: route => ({
        ...route.params,
        id: parseInt(route.params.id)
      })
    }]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import( "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 如果是 active 路徑，自動給予 class
  linkActiveClass: 'path-active',
  scrollBehavior (to, from, savedPosition) {
    // 跟原生網頁一樣表現
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top: 0}), 300)
    })
  }
});

router.beforeEach((to) => {
  if(to.meta.requireAuth && !window.user){
    return {
      name: 'login',
      query: {
        redirect: to.fullPath
      }
    }
  }
});



export default router;
