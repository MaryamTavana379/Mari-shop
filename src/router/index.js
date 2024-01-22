import { createRouter, createWebHistory } from "vue-router";
import Home from "@cp/Pages/Home.vue";
import ProductDetails from "@cp/Pages/ProductDetails.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/product",
            name: "product",
            component: ProductDetails,
        },


    ],
});

export default router;
