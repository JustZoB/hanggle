const cartAdd = (context, payload) => {
  context.commit('CART_ADD', payload)
}
const cartIncrementQuantity = (context, payload) => {
  context.commit('CART_INCREMENT_QUANTITY', payload)
}
const cartDecrementQuantity = (context, payload) => {
  context.commit('CART_DECREMENT_QUANTITY', payload)
}
const cartDelete = (context, payload) => {
  context.commit('CART_DELETE', payload)
}
const cartUpdateLocalStorage = (context, payload) => {
  context.commit('CART_UPDATE_LOCAL_STORAGE', payload)
}
const cartSetFromLocalStorage = (context, payload) => {
  context.commit('CART_SET_FROM_LOCAL_STORAGE', payload)
}

const favouritesAdd = (context, payload) => {
  context.commit('FAVOURITES_ADD', payload)
}
const favouritesRemove = (context, payload) => {
  context.commit('FAVOURITES_REMOVE', payload)
}
const favouritesUpdateLocalStorage = (context, payload) => {
  context.commit('FAVOURITES_UPDATE_LOCAL_STORAGE', payload)
}
const favouritesSetFromLocalStorage = (context, payload) => {
  context.commit('FAVOURITES_SET_FROM_LOCAL_STORAGE', payload)
}

const setBreadCrumbs = (context, payload) => {
  context.commit('SET_BREADCRUMBS', payload)
}

const recentlyViewedListAdd = (context, payload) => {
  context.commit('RECENTLY_VIEWED_LIST_ADD', payload)
}
const viewedSetFromLocalStorage = (context, payload) => {
  context.commit('VIEWED_SET_FROM_LOCAL_STORAGE', payload)
}

const setBrandsList = (context, payload) => {
  context.commit('SET_BRANDS_LIST', payload)
}
const setRecomendedList = (context, payload) => {
  context.commit('SET_RECOMENDED_LIST', payload)
}
const setSaleList = (context, payload) => {
  context.commit('SET_SALE_LIST', payload)
}
const setAlsoLikeList = (context, payload) => {
  context.commit('SET_ALSO_LIKE_LIST', payload)
}

const customFiltersGenderChange = (context, payload) => {
  context.commit('CUSTOMFILTERS_GENDER_CHANGE', payload)
}
const customFiltersBrandsToggle = (context, payload) => {
  context.commit('CUSTOMFILTERS_BRANDS_TOGGLE', payload)
}
const customFiltersSizesToggle = (context, payload) => {
  context.commit('CUSTOMFILTERS_SIZES_TOGGLE', payload, payload)
}
const customFiltersPriceChange = (context, payload) => {
  context.commit('CUSTOMFILTERS_PRICE_CHANGE', payload, payload)
}
const clearCustomFilters = (context, payload) => {
  context.commit('CLEAR_CUSTOMFILTERS', payload)
}
const setBrandFilteredList = (context, payload) => {
  context.commit('SET_BRAND_FILTERED_LIST', payload)
}
const setBrands = (context, payload) => {
  context.commit('SET_BRANDS', payload)
}
const setMinMaxPrice = (context, payload) => {
  context.commit('SET_MIN_MAX_PRICE', payload)
}

const setProductPage = (context, payload) => {
  context.commit('SET_PRODUCT_PAGE', payload)
}

const productPageFiltredChange = (context, payload) => {
  context.commit('PRODUCT_PAGE_FILTRED_CHANGE', payload)
}
const isMobile = (context, payload) => {
  context.commit('IS_MOBILE', payload)
}
const filtersModal = (context, payload) => {
  context.commit('FILTERS_MODAL', payload)
}
const burgerModal = (context, payload) => {
  context.commit('BURGER_MODAL', payload)
}
const navbarMenuModal = (context, payload) => {
  context.commit('NAVBAR_MENU_MODAL', payload)
}
const modalHideScrollbar = (context, payload) => {
  context.commit('MODAL_HIDE_SCROLLBAR', payload)
}

export default {
  cartAdd,
  cartIncrementQuantity,
  cartDecrementQuantity,
  cartDelete,
  cartUpdateLocalStorage,
  cartSetFromLocalStorage,
  favouritesAdd,
  favouritesRemove,
  favouritesUpdateLocalStorage,
  favouritesSetFromLocalStorage,
  setBreadCrumbs,
  recentlyViewedListAdd,
  viewedSetFromLocalStorage,
  setBrandsList,
  setRecomendedList,
  setSaleList,
  setAlsoLikeList,
  customFiltersGenderChange,
  customFiltersBrandsToggle,
  customFiltersSizesToggle,
  customFiltersPriceChange,
  setBrandFilteredList,
  clearCustomFilters,
  setMinMaxPrice,
  setBrands,
  setProductPage,
  productPageFiltredChange,
  isMobile,
  filtersModal,
  burgerModal,
  navbarMenuModal,
  modalHideScrollbar
}
