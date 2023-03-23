import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        name: 'home',
        path: '/',
        component: import('@page/Home.vue')
    },
    {
        name: 'streaming',
        path: '/streaming',
        component: import('@page/Stream.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    }
})

export default router