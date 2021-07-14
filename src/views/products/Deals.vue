<template>
  <div class="page">
    <BreadCrumbs />

    <div class="title">
      <h1 class="fs-t">Deals</h1>
    </div>

    <section class="section">
      <div class="deals-items">
        <DealsCard
          v-for="item in deals"
          :key="item.name"
          :item="item"
        />
      </div>

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
import deals from '@/assets/json/deals.json'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import DealsCard from '@/components/DealsCard.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'

export default {
  name: 'Deals',
  components: {
    BreadCrumbs,
    DealsCard,
    ProductBlock
  },
  data () {
    return {
      deals: deals
    }
  },
  created () {
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
    crumbs: function () {
      return ['deals']
    }
  }
}
</script>
