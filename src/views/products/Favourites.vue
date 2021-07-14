<template>
  <div class="favourites page">
    <BreadCrumbs />

    <div class="head">
      <div class="title">
        <h1 class="fs-t">Favourites</h1>
        <p class="amount">({{ Object.keys(favouritesList).length }})</p>
      </div>
    </div>

    <section class="section row">
      <ProductBlock class="product-block"
        :size="'big'"
        :items="favouritesList"
      />
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'

export default {
  name: 'Favourites',
  components: {
    BreadCrumbs,
    ProductBlock
  },
  created () {
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
    favouritesList: function () {
      return store.getters.favourites
    },
    isMobile: function () {
      return store.getters.isMobile
    },
    crumbs: function () {
      return ['favourites']
    }
  }
}
</script>

<style lang="scss" scoped>
.favourites.page {
  .product-block {
    width: 100%;
  }
}
</style>
