import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/geolocation'
  },
  {
    path: '/geolocation',
    component: () => import ('../views/Geolocation.vue')
  },
  {
    path: '/device_info',
    component: () => import ('../views/DeviceInfo.vue')
  },
  {
    path: '/vibrador',
    component: () => import ('../views/Vibrator.vue')
  },
  {
    path: '/share_api',
    component: () => import ('../views/ShareAPI.vue')
  },
  {
    path: '/notifications',
    component: () => import ('../views/Notifications.vue')
  },
  {
    path: '/motion',
    component: () => import ('../views/Motion.vue')
  },
  {
    path: '/camera',
    component: () => import ('../views/Camera.vue')
  },
  {
    path: '/toast',
    component: () => import ('../views/Toast.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
