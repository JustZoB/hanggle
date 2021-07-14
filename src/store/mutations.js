import store from '@/store/index'

const CART_ADD = (state, data) => {
  const itemId = data.item.id

  if (state.cart[itemId]) {
    store.dispatch('cartIncrementQuantity', {
      item: data.item
    })
  } else {
    state.cart = {
      ...state.cart,
      [itemId]: {
        ...data.item,
        quantity: 1
      }
    }
  }

  store.dispatch('cartUpdateLocalStorage')
}
const CART_INCREMENT_QUANTITY = (state, data) => {
  const itemId = data.item.id

  state.cart = {
    ...state.cart,
    [itemId]: {
      ...state.cart[itemId],
      quantity: state.cart[itemId].quantity + 1
    }
  }

  store.dispatch('cartUpdateLocalStorage')
}
const CART_DECREMENT_QUANTITY = (state, data) => {
  const itemId = data.item.id

  state.cart = {
    ...state.cart,
    [itemId]: {
      ...state.cart[itemId],
      quantity: state.cart[itemId].quantity - 1
    }
  }

  store.dispatch('cartUpdateLocalStorage')
}
const CART_DELETE = (state, data) => {
  Object.entries(state.cart).forEach((element) => {
    if (parseInt(element[0]) === data.item.id) {
      state.cart = Object.fromEntries(Object.entries(state.cart).filter(item => {
        if (item[0] === element[0]) {
          return false
        }

        return true
      }))
    }
  })

  store.dispatch('cartUpdateLocalStorage')
}
const CART_UPDATE_LOCAL_STORAGE = (state) => {
  localStorage.setItem('hanggle_cart', JSON.stringify(state.cart))
}
const CART_SET_FROM_LOCAL_STORAGE = (state) => {
  const storage = JSON.parse(localStorage.getItem('hanggle_cart'))

  if (storage !== undefined && storage !== null) {
    state.cart = storage
  }
}

const FAVOURITES_ADD = (state, data) => {
  state.favourites = {
    ...state.favourites,
    [data.item.id]: {
      ...data.item
    }
  }

  store.dispatch('favouritesUpdateLocalStorage')
}
const FAVOURITES_REMOVE = (state, data) => {
  Object.entries(state.favourites).forEach((element) => {
    if (parseInt(element[0]) === data.item.id) {
      state.favourites = Object.fromEntries(Object.entries(state.favourites).filter(item => {
        if (item[0] === element[0]) {
          return false
        }

        return true
      }))
    }
  })

  store.dispatch('favouritesUpdateLocalStorage')
}
const FAVOURITES_UPDATE_LOCAL_STORAGE = (state) => {
  localStorage.setItem('hanggle_favourites', JSON.stringify(state.favourites))
}
const FAVOURITES_SET_FROM_LOCAL_STORAGE = (state) => {
  const storage = JSON.parse(localStorage.getItem('hanggle_favourites'))

  if (storage !== undefined && storage !== null) {
    state.favourites = storage
  }
}

const SET_BREADCRUMBS = (state, data) => {
  const list = []

  list.push({
    name: 'Home',
    link: '/'
  })

  let crumbLink = ''

  for (let i = 0; i < data.crumbs.length; i++) {
    if (!data.crumbs[i].name) {
      crumbLink = crumbLink + '/' + data.crumbs[i]

      list.push({
        name: data.crumbs[i],
        link: crumbLink
      })
    } else {
      list.push({
        name: data.crumbs[i].name,
        link: data.crumbs[i].link
      })
    }
  }

  state.breadcrumbs = list
}

const RECENTLY_VIEWED_LIST_ADD = (state, data) => {
  state.recentlyViewedList = {
    ...state.recentlyViewedList,
    [data.item.id]: {
      ...data.item
    }
  }

  localStorage.setItem('hanggle_viewed', JSON.stringify(state.recentlyViewedList))
}
const VIEWED_SET_FROM_LOCAL_STORAGE = (state) => {
  const storage = JSON.parse(localStorage.getItem('hanggle_viewed'))

  if (storage !== undefined && storage !== null) {
    state.recentlyViewedList = storage
  }
}

const SET_BRANDS_LIST = (state, data) => {
  const list = {}

  for (const key in data.brands) {
    if (Object.hasOwnProperty.call(data.brands, key)) {
      const element = data.brands[key]

      list[key] = element
    }
  }

  state.brandsList = list
}
const SET_RECOMENDED_LIST = (state, data) => {
  const list = {}

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      list[key] = element
    }
  }

  state.recomendedList = list
}
const SET_SALE_LIST = (state, data) => {
  const list = {}

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      if (element.sale) {
        list[key] = element
      }
    }
  }

  state.saleList = list
}
const SET_ALSO_LIKE_LIST = (state, data) => {
  const list = {}

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      if (element.brand.link === 'chanel') {
        list[key] = element
      }
    }
  }

  state.alsoLikeList = list
}

const CUSTOMFILTERS_GENDER_CHANGE = (state, data) => {
  state.customFilters.gender = data.gender

  store.dispatch('productPageFiltredChange')
}
const CUSTOMFILTERS_BRANDS_TOGGLE = (state, data) => {
  state.customFilters.brands = data.list

  store.dispatch('productPageFiltredChange')
}
const CUSTOMFILTERS_SIZES_TOGGLE = (state, data) => {
  state.customFilters.sizes = data.list

  store.dispatch('productPageFiltredChange')
}
const CUSTOMFILTERS_PRICE_CHANGE = (state, data) => {
  state.customFilters.price.min = parseInt(data.left)
  state.customFilters.price.max = parseInt(data.right)

  store.dispatch('productPageFiltredChange')
}
const SET_BRAND_FILTERED_LIST = (state, data) => {
  state.brandSearchInput = data.search
  const list = {}

  if (data.search.length) {
    for (const key in data.brands) {
      if (Object.hasOwnProperty.call(data.brands, key)) {
        let isInCustomFilters = false

        state.customFilters.brands.forEach(brand => {
          if (brand === data.brands[key].link) {
            isInCustomFilters = true
          }
        })

        if (
          data.brands[key].name.toLowerCase().search(data.search.toLowerCase()) !== -1 ||
          isInCustomFilters
        ) {
          list[key] = data.brands[key]
        }
      }
    }
  } else {
    for (const key in data.brands) {
      if (Object.hasOwnProperty.call(data.brands, key)) {
        list[key] = data.brands[key]
      }
    }
  }

  state.brandFilteredList = list
}
const SET_MIN_MAX_PRICE = (state, data) => {
  let maxPrice = 0

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      if (element.price > maxPrice) {
        maxPrice = element.price
      }
    }
  }

  state.maxPrice = maxPrice
  state.customFilters.price.max = maxPrice

  let minPrice = 99999

  if (!Object.keys(data.products).length) {
    minPrice = 0
  } else {
    for (const key in data.products) {
      if (Object.hasOwnProperty.call(data.products, key)) {
        const element = data.products[key]

        if (element.price < minPrice) {
          minPrice = element.price
        }
      }
    }
  }

  state.minPrice = minPrice
  state.customFilters.price.min = minPrice
}

const SET_BRANDS = (state, data) => {
  const brands = {}

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      if (!brands[element.brand.link]) {
        brands[element.brand.link] = {
          name: element.brand.name,
          link: element.brand.link
        }
      }
    }
  }

  state.brands = brands
}

const CLEAR_CUSTOMFILTERS = (state) => {
  state.customFilters = {
    gender: 'all',
    brands: [],
    price: {
      min: state.minPrice,
      max: state.maxPrice
    },
    sizes: []
  }

  state.productPageFiltred = state.productPage
}

const SET_PRODUCT_PAGE = (state, data) => {
  const list = {}

  for (const key in data.products) {
    if (Object.hasOwnProperty.call(data.products, key)) {
      const element = data.products[key]

      let price = element.price
      if (element.sale) {
        price = element.price - element.price * element.sale / 100
      }

      if (
        (data.gender === undefined || element.gender === data.gender) &&
        (data.category === undefined || element.category === data.category) &&
        (data.subcategory === undefined || element.subcategory === data.subcategory) &&
        (data.brand === undefined || element.brand.link === data.brand) &&
        (data.underPrice === undefined || price <= data.underPrice)
      ) {
        list[key] = element
      }
    }
  }

  state.productPage = list
  store.dispatch('clearCustomFilters')
}

const PRODUCT_PAGE_FILTRED_CHANGE = (state) => {
  let filterBrand = {}
  if (state.customFilters.brands.length) {
    state.customFilters.brands.forEach(brand => {
      for (const key in state.productPage) {
        if (Object.hasOwnProperty.call(state.productPage, key)) {
          if (state.productPage[key].brand.link === brand) {
            filterBrand[key] = state.productPage[key]
          }
        }
      }
    })
  } else {
    filterBrand = { ...state.productPage }
  }
  state.productPageFiltred = filterBrand

  let filterGender = {}
  if (state.customFilters.gender === 'all') {
    filterGender = { ...state.productPageFiltred }
  } else {
    for (const key in state.productPageFiltred) {
      if (Object.hasOwnProperty.call(state.productPageFiltred, key)) {
        if (state.productPageFiltred[key].gender === state.customFilters.gender) {
          filterGender[key] = state.productPageFiltred[key]
        }
      }
    }
  }
  state.productPageFiltred = filterGender

  let filterSize = {}
  if (state.customFilters.sizes.length) {
    state.customFilters.sizes.forEach(size => {
      for (const key in state.productPageFiltred) {
        if (Object.hasOwnProperty.call(state.productPageFiltred, key)) {
          if (state.productPageFiltred[key].size === size) {
            filterSize[key] = state.productPageFiltred[key]
          } else if (!state.productPageFiltred[key].size && size === 'oneSize') {
            filterSize[key] = state.productPageFiltred[key]
          }
        }
      }
    })
  } else {
    filterSize = { ...state.productPageFiltred }
  }
  state.productPageFiltred = filterSize

  const filterPrice = {}
  for (const key in state.productPageFiltred) {
    if (Object.hasOwnProperty.call(state.productPageFiltred, key)) {
      if (
        state.productPageFiltred[key].price >= state.customFilters.price.min &&
        state.productPageFiltred[key].price <= state.customFilters.price.max
      ) {
        filterPrice[key] = state.productPageFiltred[key]
      }
    }
  }
  state.productPageFiltred = filterPrice
}
const IS_MOBILE = (state, data) => {
  if (data.width <= 930) {
    state.isMobile = true
  } else {
    state.isMobile = false
  }
}
const FILTERS_MODAL = (state, data) => {
  if (data.isOpen === true || data.isOpen === false) {
    state.isFiltersModalOpen = data.isOpen
  } else if (data.isOpen === undefined) {
    state.isFiltersModalOpen = !state.isFiltersModalOpen
  }
  store.dispatch('modalHideScrollbar')
}
const BURGER_MODAL = (state, data) => {
  if (data.isOpen === true || data.isOpen === false) {
    state.isBurgerMenuOpen = data.isOpen
  } else if (data.isOpen === undefined) {
    state.isBurgerMenuOpen = !state.isBurgerMenuOpen
  }
  store.dispatch('navbarMenuModal', {
    isOpen: false
  })
  store.dispatch('modalHideScrollbar')
}
const NAVBAR_MENU_MODAL = (state, data) => {
  if (data.isOpen === true || data.isOpen === false) {
    state.isNavbarOpen = data.isOpen
  } else if (data.isOpen === undefined) {
    state.isNavbarOpen = !state.isNavbarOpen
  }
}
const MODAL_HIDE_SCROLLBAR = (state, data) => {
  if (state.isFiltersModalOpen || state.isBurgerMenuOpen) {
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.documentElement.style.overflow = 'auto'
  }
}

export default {
  CART_ADD,
  CART_INCREMENT_QUANTITY,
  CART_DECREMENT_QUANTITY,
  CART_DELETE,
  CART_UPDATE_LOCAL_STORAGE,
  CART_SET_FROM_LOCAL_STORAGE,
  FAVOURITES_ADD,
  FAVOURITES_REMOVE,
  FAVOURITES_UPDATE_LOCAL_STORAGE,
  FAVOURITES_SET_FROM_LOCAL_STORAGE,
  SET_BREADCRUMBS,
  RECENTLY_VIEWED_LIST_ADD,
  VIEWED_SET_FROM_LOCAL_STORAGE,
  SET_BRANDS_LIST,
  SET_RECOMENDED_LIST,
  SET_SALE_LIST,
  SET_ALSO_LIKE_LIST,
  CUSTOMFILTERS_GENDER_CHANGE,
  CUSTOMFILTERS_BRANDS_TOGGLE,
  CUSTOMFILTERS_SIZES_TOGGLE,
  CUSTOMFILTERS_PRICE_CHANGE,
  SET_BRAND_FILTERED_LIST,
  SET_BRANDS,
  SET_MIN_MAX_PRICE,
  CLEAR_CUSTOMFILTERS,
  SET_PRODUCT_PAGE,
  PRODUCT_PAGE_FILTRED_CHANGE,
  IS_MOBILE,
  FILTERS_MODAL,
  BURGER_MODAL,
  NAVBAR_MENU_MODAL,
  MODAL_HIDE_SCROLLBAR
}
