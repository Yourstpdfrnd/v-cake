import Vue from 'vue'
import Router from 'vue-router'

import catalog from '../components/catalog/catalog.vue'
import cart from '../components/cart/cart.vue'
import favorite from '../components/favorite/favorite.vue'


Vue.use(Router);

let router = new Router({
    routes: [
        {
          path: '/',
          name: 'catalog',
          component: catalog  
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
            props: true
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: favorite,
            props: true 
        }
    ]
})


export default router

