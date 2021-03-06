import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: () => import('@/views/Welcome.vue'),
      },
      {
        path: '/users',
        component: () => import('@/views/user/Users.vue'),
      },
      {
        path: '/rights',
        component: () => import('@/views/power/Rights.vue')
      },
      {
        path: '/roles',
        component: () => import('@/views/power/Roles.vue')
      }
    ]
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 如果用户访问登录页面，直接放行
  if (to.path === '/login') return next();
  // 从sessionStorage 中获取保存的 token 值
  const tokenStr = window.sessionStorage.getItem('TOKEN');
  // 如果没有 token 则跳转到登录页 
  if (!tokenStr) {
    return next('/login');
  }
  next();
})
export default router
