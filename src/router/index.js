import {createRouter, createWebHashHistory} from 'vue-router'
import ProductList from "@/components/product/Product_List";
import CartList from "@/components/cart/Cart_List";

const routes = [
    {
        path: '/inventory',
        component: ProductList
    },
    {
        path: '/cart',
        component: CartList
    },
    {
        path: '/',
        redirect: '/inventory'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
