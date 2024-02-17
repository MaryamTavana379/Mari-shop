import { createRouter, createWebHistory } from "vue-router";
import Home from "@cp/Pages/Home.vue";
import ProductDetails from "@cp/Pages/ProductDetails.vue";
import Cart from "@cp/Pages/Cart.vue";
import Search from "@cp/Pages/Search.vue";
import Products from "@cp/Pages/Products.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/products",
            name: "products",
            component: Products,
        },
        {
            path: "/product/:id",
            name: "product",
            component: ProductDetails,
            props:true
        },
        {
            path: "/cart/",
            name:"cart",
            component:Cart,
            props:true
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
