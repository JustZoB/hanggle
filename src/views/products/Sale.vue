<template>
  <div class="sale page">
    <BreadCrumbs />

    <div class="head">
      <div class="title">
        <h1 class="fs-t">Sale</h1>
        <p class="amount">({{ Object.keys(saleList).length }})</p>
      </div>
    </div>

    <section class="section">
      <ProductBlock class="product-block"
        :size="'big'"
        :items="saleList"
      />

      <ProductBlock
        :size="'big'"
        :title="'You May Also Like'"
        :items="Object.entries(alsoLikeList).slice(0, 4).map(entry => entry[1])"
      />
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'

export default {
  name: 'Sale',
  components: {
    BreadCrumbs,
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
    alsoLikeList () {
      return store.getters.alsoLikeList
    },
    saleList: function () {
      return store.getters.saleList
    },
    isMobile: function () {
      return store.getters.isMobile
    },
    crumbs: function () {
      return ['sale']
    }
  }
}
</script>

<style lang="scss" scoped>
.sale.page {
  .product-block {
    width: 100%;
  }
}
</style>
