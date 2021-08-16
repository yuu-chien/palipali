import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    // 當使用者輸入不存在頁面時，可以導向首頁
    path: '*',
    redirect: '/palipali/index',
  },
  // {
  //   path: '',
  //   name: 'layout',
  //   component: () => import('../views/layout/Layout.vue'),
  //   children: [
  //     {
  //       path: '/',
  //       name: 'Palipali-index',
  //       component: () => import('../views/layout/Layout_index.vue'),
  //     },
  //     {
  //       path: '/palipali/products',
  //       name: 'Palipali-products',
  //       component: () => import('../views/layout/Layout_products.vue'),
  //     },
  //     {
  //       path: '/palipali/product/:id',
  //       name: 'Palipali-product',
  //       component: () => import('../views/layout/Layout_prod.vue'),
  //     },
  //     {
  //       path: '/palipali/about',
  //       name: 'Palipali-about',
  //       component: () => import('../views/layout/Layout_about.vue'),
  //     },
  //     {
  //       path: '/palipali/gallery',
  //       name: 'Palipali-gallery',
  //       component: () => import('../views/layout/Layout_gallery.vue'),
  //     },
  //     {
  //       path: '/palipali/cart',
  //       name: 'Palipali-cart',
  //       component: () => import('../views/layout/Layout_cart.vue'),
  //     },
  //     {
  //       path: '/palipali/success',
  //       name: 'Palipali-success',
  //       component: () => import('../views/layout/Layout_success.vue'),
  //     },
  //   ],
  // },
  // {
  //   path: '/palipali/login',
  //   name: 'login',
  //   component: () => import('../views/Login.vue'),
  // },
  // {
  //   path: '/palipali/admin',
  //   name: 'admin',
  //   component: () => import('../views/backend/Backend.vue'),
  //   children: [
  //     {
  //       path: '/palipali/admin/products',
  //       name: 'admin-products',
  //       component: () => import('../views/backend/Backend_products.vue'),
  //     },
  //     {
  //       path: '/palipali/admin/product/:id',
  //       name: 'admin-product-edit',
  //       component: () => import('../views/backend/Backend_prodEdit.vue'),
  //     },
  //     {
  //       path: '/palipali/admin/product-add',
  //       name: 'admin-product-add',
  //       component: () => import('../views/backend/Backend_prodAdd.vue'),
  //     },
  //     {
  //       path: '/palipali/admin/orders',
  //       name: 'admin-orders',
  //       component: () => import('../views/backend/Backend_orders.vue'),
  //     },
  //     {
  //       path: '/palipali/admin/order/:id',
  //       name: 'admin-order-check',
  //       component: () => import('../views/backend/Backend_ord.vue'),
  //     },
  //   ],
  // },
];
// 換頁時可將頁面保持從頂開始瀏覽
const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
