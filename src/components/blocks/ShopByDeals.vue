<template>
  <section class="section">
    <h2 class="title fs-t">Shop by Deals</h2>
    <div class="deals-items">
      <DealsCard
        v-for="item in items"
        :key="item.name"
        :item="item"
      />
    </div>
  </section>
</template>

<script>
import DealsCard from '@/components/DealsCard.vue'

export default {
  name: 'ShopByDeals',
  components: {
    DealsCard
  },
  props: ['items']
}
</script>

<style lang="scss">
.deals-items {
  display: flex;
  flex-wrap: wrap;
  margin: -5px;

  & > * {
    width: 33.3333%;

  }
}

@media (max-width: map-get($grid-breakpoints, 'md')) {
  .deals-items {
    & > * {
      width: 100%;
      padding: 0;
    }
  }
}
@media (max-width: map-get($grid-breakpoints, 'sm')) {
  .deals-items {
    padding: 0;
    margin: 0;
  }
}
</style>
