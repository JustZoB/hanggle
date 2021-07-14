import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isMobile: false,
    isFiltersModalOpen: false,
    isBurgerMenuOpen: false,
    isNavbarOpen: false,
    cart: {},
    favourites: {},
    productPage: {},
    productPageFiltred: {},
    breadcrumbs: [],
    recentlyViewedList: {},
    brandsList: {},
    recomendedList: {},
    saleList: {},
    alsoLikeList: {},
    customFilters: {
      gender: 'all',
      brands: [],
      price: {
        min: 0,
        max: 0
      },
      sizes: []
    },
    minPrice: 0,
    maxPrice: 0,
    brands: {},
    brandSearchInput: '',
    brandFilteredList: {}
  },
  getters,
  mutations,
  actions
})

export default store
