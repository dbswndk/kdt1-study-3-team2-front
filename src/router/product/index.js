import Vue from "vue";
import VueRouter from "vue-router";
import ProductListPage from "@/views/product/ProductListPage.vue";
import ProductReadPage from "@/views/product/ProductReadPage.vue";

Vue.use(VueRouter);

const productRoutes = [
    {
        path: "/product-list-page",
        name: "ProductListPage",
        component: ProductListPage
    },
    {
        path: "/product-read-page/:productId",
        name: "ProductReadPage",
        component: ProductReadPage,
        props: true
    }


];
export default productRoutes;