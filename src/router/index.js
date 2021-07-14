import Vue from 'vue'
import VueRouter from 'vue-router'

import PageNotFound from '@/views/PageNotFound.vue'
import Home from '@/views/Home.vue'

import Cart from '@/views/cart/Cart.vue'
import Payment from '@/views/cart/Payment.vue'

import Sale from '@/views/products/Sale.vue'
import Favourites from '@/views/products/Favourites.vue'
import BrandsPage from '@/views/products/BrandsPage.vue'
import CategoryPage from '@/views/products/CategoryPage.vue'
import ProductPage from '@/views/products/ProductPage.vue'
import Deals from '@/views/products/Deals.vue'

import BrandsProductPage from '@/views/filtredProducts/BrandsProductPage.vue'
import Categories from '@/views/filtredProducts/Categories.vue'
import Subcategories from '@/views/filtredProducts/Subcategories.vue'
import GenderCategories from '@/views/filtredProducts/GenderCategories.vue'
import DealsPage from '@/views/filtredProducts/DealsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/cart/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/women',
    name: 'WomenGenderCategories',
    component: GenderCategories
  },
  {
    path: '/women/:category',
    name: 'WomenCategories',
    component: Categories
  },
  {
    path: '/women/:category/:subcategory',
    name: 'WomenSubcategories',
    component: Subcategories
  },
  {
    path: '/men',
    name: 'MenGenderCategories',
    component: GenderCategories
  },
  {
    path: '/men/:category',
    name: 'MenCategories',
    component: Categories
  },
  {
    path: '/men/:category/:subcategory',
    name: 'MenSubcategories',
    component: Subcategories
  },
  {
    path: '/girls',
    name: 'GirlsGenderCategories',
    component: GenderCategories
  },
  {
    path: '/girls/:category',
    name: 'GirlsCategories',
    component: Categories
  },
  {
    path: '/girls/:category/:subcategory',
    name: 'GirlsSubcategories',
    component: Subcategories
  },
  {
    path: '/boys',
    name: 'BoysGenderCategories',
    component: GenderCategories
  },
  {
    path: '/boys/:category',
    name: 'BoysCategories',
    component: Categories
  },
  {
    path: '/boys/:category/:subcategory',
    name: 'BoysSubcategories',
    component: Subcategories
  },
  {
    path: '/category/:category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/brands',
    name: 'BrandsPage',
    component: BrandsPage
  },
  {
    path: '/brands/:brand',
    name: 'BrandsProductPage',
    component: BrandsProductPage
  },
  {
    path: '/deals',
    name: 'Deals',
    component: Deals
  },
  {
    path: '/deals/:price',
    name: 'DealsPage',
    component: DealsPage
  },
  {
    path: '/item/:id',
    name: 'ProductPage',
    component: ProductPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes
})

export default router
