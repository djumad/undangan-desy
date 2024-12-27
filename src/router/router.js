import { createRouter , createWebHistory } from 'vue-router';
import Home from "../page/Home.vue";
import To from "../page/To.vue";




const routes = [
    {
        path : "/",
        component : Home 
    },
    {
        path : "/:nama",
        component : To
        
    },
];

const router = createRouter({
    history : createWebHistory() , routes
});

export default router;