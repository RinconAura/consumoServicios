import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/Login.vue';
import ProductList from '@/components/ProductList.vue';
import EditProduct from '@/components/EditProduct.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/productos',
      component: ProductList,
      meta: { requiresAuth: true }, // Requiere autenticación
    },
    {
      path: '/editar-producto/:id',
      component: EditProduct,
      meta: { requiresAuth: true }, // Requiere autenticación
    },
    // Otras rutas...
  ];
  
  const router = new VueRouter({
    routes,
  });
  
  // Guardia de ruta para verificar la autenticación
  router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login'); // Redirige al inicio de sesión si no está autenticado
    } else {
      next();
    }
  });
  
  export default router;