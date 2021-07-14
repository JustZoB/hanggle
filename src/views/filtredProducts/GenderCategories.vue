<template>
  <div class="page">
    <BreadCrumbs :crumbs="crumbs" />

    <ProductsPageHead
      :title="gender"
      :amount="Object.keys(list).length"
    />

    <section class="section row">
      <AsideMenu
        :list="list"
        :filtredList="filtredList"
        :gender="gender"
      />
      <ProductBlock class="product-block"
        :size="'medium'"
        :items="filtredList"
      />
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import ProductsPageHead from '@/components/ProductsPageHead.vue'
import AsideMenu from '@/components/AsideMenu.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'

export default {
  name: 'GenderCategories',
  components: {
    BreadCrumbs,
    ProductsPageHead,
    AsideMenu,
    ProductBlock
  },
  created () {
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
  },
  mounted () {
    store.dispatch('setMinMaxPrice', {
      products: this.list
    })
    store.dispatch('setBrands', {
      products: this.list
    })
  },
  updated () {
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
  },
  computed: {
    gender: function () {
      return this.$route.path.split('/')[1]
    },
    list: function () {
      store.dispatch('setProductPage', {
        gender: this.gender,
        products: products
      })

      return store.getters.productPage
    },
    filtredList: function () {
      return store.getters.productPageFiltred
    },
    crumbs: function () {
      return [this.gender]
    }
  }
}
</script>
