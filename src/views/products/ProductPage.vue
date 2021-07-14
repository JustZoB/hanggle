<template>
  <div class="product page">
    <BreadCrumbs />

    <Product :item="item" />
    <ProductAboutMore v-if="isMobile" :item='item' />

    <ProductBlock
      :size="'big'"
      :title="'You May Also Like'"
      :items="Object.entries(alsoLikeList).slice(0, 4).map(entry => entry[1])"
    />

    <ProductBlock
      v-if="Object.entries(recentlyViewedList).length"
      :size="'big'"
      :title="'You Recently Viewed'"
      :items="Object.entries(recentlyViewedList).slice(0, 4).map(entry => entry[1])"
    />
  </div>
</template>

<script>
import store from '@/store/index'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import Product from '@/components/product/Product.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'
import ProductAboutMore from '@/components/product/ProductAboutMore.vue'

export default {
  name: 'ProductPage',
  components: {
    BreadCrumbs,
    Product,
    ProductAboutMore,
    ProductBlock
  },
  created () {
    store.dispatch('setAlsoLikeList', {
      products: products
    })
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
  },
  updated () {
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
  },
  computed: {
    item: function () {
      return products[parseInt(this.$route.params.id)]
    },
    alsoLikeList () {
      return store.getters.alsoLikeList
    },
    recentlyViewedList () {
      return store.getters.recentlyViewedList
    },
    isMobile: function () {
      return store.getters.isMobile
    },
    crumbs: function () {
      return [
        this.item.gender,
        this.item.category,
        this.item.subcategory,
        {
          name: this.item.name,
          link: `/item/${this.item.id}`
        }
      ]
    }
  }
}
</script>
