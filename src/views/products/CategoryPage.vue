<template>
  <div class="categoryPage page">
    <BreadCrumbs />

    <ProductsPageHead
      :title="category"
      :withoutFilters="true"
    />

    <section class="section categoryPage__block">
      <div class="gender-blocks">
        <GenderCard :gender="'women'" :category="category" />
        <GenderCard :gender="'men'" :category="category" />
        <GenderCard :gender="'girls'" :category="category" />
        <GenderCard :gender="'boys'" :category="category" />
      </div>

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
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import products from '@/assets/json/products.json'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import ProductsPageHead from '@/components/ProductsPageHead.vue'
import ProductBlock from '@/components/blocks/ProductBlock.vue'
import GenderCard from '@/components/GenderCard.vue'

export default {
  name: 'GenderCategories',
  components: {
    BreadCrumbs,
    ProductsPageHead,
    ProductBlock,
    GenderCard
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
    category () {
      return this.$route.params.category
    },
    alsoLikeList () {
      return store.getters.alsoLikeList
    },
    recentlyViewedList () {
      return store.getters.recentlyViewedList
    },
    crumbs: function () {
      return [{
        name: this.category,
        link: `/category/${this.category}`
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.categoryPage {
  &__block {
    display: flex;

    .gender-blocks {
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      & > * {
        width: calc(50% - 10px);
        margin: 5px;
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    &__block {

      .gender-blocks {
        margin: -5px 0;
        padding: 0 10px;

        & > * {
          width: 100%;
        }
      }
    }
  }
}
</style>
