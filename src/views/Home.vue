<template>
  <div class="home page">
    <Banner
      :name="'Denium Sale'"
      :image="'banner1.png'"
      :link="'/men/clothes'"
      style="margin: 0"
    />

    <MenuBlock :links="links" />

    <ProductBlock
      :items="Object.entries(recomendedList).slice(0, 8).map(entry => entry[1])"
      :size="'big'"
      :title="'Recomended For You'"
      :button="'See more'"
      :buttonTheme="'dark'"
      :buttonLink="'recomended'"
    />

    <ShopByDeals :items="deals" />

    <ProductBlock
      :items="Object.entries(saleList).slice(0, 4).map(entry => entry[1])"
      :size="'big'"
      :title="'Sale'"
      :button="'See more'"
      :buttonTheme="'dark'"
      :buttonLink="'sale'"
    />

    <Banner
      class="banner-block"
      :name="'Organic Clothing'"
      :image="'banner2.png'"
      :link="'/women/clothes'"
    />

    <BrandsBlock
      :items="Object.entries(brandsList).slice(0, 6).map(entry => entry[1])"
      :title="'Brands'"
      :button="'See more'"
      :buttonTheme="'dark'"
      :buttonLink="'brands'"
    />
  </div>
</template>

<script>
import store from '@/store/index'
import links from '@/assets/json/menu-blocks.json'
import products from '@/assets/json/products.json'
import brands from '@/assets/json/brands.json'
import deals from '@/assets/json/deals.json'
import MenuBlock from '@/components/blocks/MenuBlock.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'
import BrandsBlock from '@/components/blocks/BrandsBlock.vue'
import Banner from '@/components/blocks/Banner.vue'
import ShopByDeals from '@/components/blocks/ShopByDeals.vue'

export default {
  name: 'Home',
  components: {
    MenuBlock,
    ProductBlock,
    BrandsBlock,
    Banner,
    ShopByDeals
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
  },
  data () {
    return {
      links: links,
      brands: brands,
      deals: deals
    }
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
    }
  }
}
</script>
