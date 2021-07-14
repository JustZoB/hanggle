<template>
  <div class="page">
    <BreadCrumbs />

    <div class="title">
      <h1 class="fs-t">Brands</h1>
    </div>

    <section class="section">
      <BrandsBlock :items="brandsList" class="section__brands" />

      <ProductBlock
        :items="Object.entries(recomendedList).slice(0, 8).map(entry => entry[1])"
        :size="'big'"
        :title="'Recomended For You'"
        :button="'See more'"
        :buttonTheme="'dark'"
        :buttonLink="'recomended'"
      />

      <ProductBlock
        :items="Object.entries(saleList).slice(0, 4).map(entry => entry[1])"
        :size="'big'"
        :title="'Sale'"
        :button="'See more'"
        :buttonTheme="'dark'"
        :buttonLink="'sale'"
      />
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import brands from '@/assets/json/brands.json'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import BrandsBlock from '@/components/blocks/BrandsBlock.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'

export default {
  name: 'GenderCategories',
  components: {
    BreadCrumbs,
    BrandsBlock,
    ProductBlock
  },
  created () {
    store.dispatch('setBrandsList', {
      brands: brands
    })
    store.dispatch('setSaleList', {
      products: products
    })
    store.dispatch('setRecomendedList', {
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
    saleList () {
      return store.getters.saleList
    },
    recomendedList () {
      return store.getters.recomendedList
    },
    brandsList () {
      return store.getters.brandsList
    },
    crumbs: function () {
      return ['brands']
    }
  }
}
</script>
