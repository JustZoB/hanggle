const cart = state => state.cart
const favourites = state => state.favourites
const productPage = state => state.productPage
const productPageFiltred = state => state.productPageFiltred
const breadcrumbs = state => state.breadcrumbs
const customFilters = state => state.customFilters
const brands = state => state.brands
const minPrice = state => state.minPrice
const maxPrice = state => state.maxPrice
const sizeCheckedList = state => state.customFilters.sizes
const brandCheckedList = state => state.customFilters.brands
const genderCheckedList = state => state.customFilters.gender
const brandSearchInput = state => state.brandSearchInput
const brandFilteredList = state => state.brandFilteredList
const recentlyViewedList = state => state.recentlyViewedList
const brandsList = state => state.brandsList
const recomendedList = state => state.recomendedList
const saleList = state => state.saleList
const alsoLikeList = state => state.alsoLikeList
const isMobile = state => state.isMobile
const isFiltersModalOpen = state => state.isFiltersModalOpen
const isBurgerMenuOpen = state => state.isBurgerMenuOpen
const isNavbarOpen = state => state.isNavbarOpen

export default {
  cart,
  favourites,
  productPage,
  productPageFiltred,
  breadcrumbs,
  customFilters,
  brands,
  minPrice,
  maxPrice,
  sizeCheckedList,
  brandCheckedList,
  genderCheckedList,
  brandSearchInput,
  brandFilteredList,
  recentlyViewedList,
  brandsList,
  recomendedList,
  saleList,
  alsoLikeList,
  isMobile,
  isFiltersModalOpen,
  isBurgerMenuOpen,
  isNavbarOpen
}
