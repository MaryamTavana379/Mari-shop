import { createRouter, createWebHistory } from "vue-router";
import Home from "@cp/Pages/Home.vue";
import ProductDetails from "@cp/Pages/ProductDetails.vue";
import Cart from "@cp/Pages/Cart.vue";
import Search from "@cp/Pages/Search.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/product/:id",
            name: "product",
            component: ProductDetails,
            props:true
        },
        {
            path: "/cart",
            name:"cart",
            component:Cart,
        },
        {
            path: "/search/:query?",
            name:"search",
            component:Search,
            props: true,

        }


    ],
});

export default router;
