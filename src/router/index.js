import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const UserDetails = () => import('@/pages/demo/index.vue')
const routes =[
    
    { path: "/", component:UserDetails },

]
const router = createRouter({ history, routes });

export default router;