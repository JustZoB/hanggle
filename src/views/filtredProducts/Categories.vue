<template>
  <div class="page">
    <BreadCrumbs />

    <ProductsPageHead
      :title="category"
      :amount="Object.keys(list).length"
    />

    <section class="section row">
      <AsideMenu
        :list="list"
        :filtredList="filtredList"
        :gender="gender"
        :thisCategory="category"
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
  name: 'Categories',
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
    category: function () {
      return this.$route.path.split('/')[2]
    },
    list: function () {
      store.dispatch('setProductPage', {
        gender: this.gender,
        category: this.category,
        products: products
      })

      return store.getters.productPage
    },
    filtredList: function () {
      return store.getters.productPageFiltred
    },
    crumbs: function () {
      return [this.gender, this.category]
    }
  }
}
</script>
