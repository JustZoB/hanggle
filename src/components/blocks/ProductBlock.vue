<template>
  <section class="section" :class="size">
    <h2 v-if="title" class="title fs-t">{{ title }}</h2>

    <div v-if="Object.keys(items).length" class="items" >
      <ProductCard
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>

    <div v-else class="noitems">
      <p class="fs-b">No products</p>
    </div>

    <Button
      v-if="buttonLink"
      class="button"
      :theme="buttonTheme"
      :link="buttonLink"
    >
      {{ button }}
    </Button>
  </section>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'ProductBlock',
  components: {
    ProductCard,
    Button
  },
  props: ['items', 'title', 'size', 'button', 'buttonTheme', 'buttonLink']
}
</script>

<style lang="scss" scoped>
.section {
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    & > * {
      margin: 5px;
    }
  }

  .noitems {
    display: flex;
    justify-content: center;
  }

  .button {
    align-self: center;
    margin-top: 30px;
    width: 300px;
  }

  &.big .items > * {
    width: calc(25% - 10px);
  }

  &.medium .items > * {
    width: calc(33.3333% - 10px);
  }

  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    &.big {
      .items > * {
        width: calc(33% - 10px);
      }
    }

    &.medium .items > * {
      width: calc(50% - 10px);
    }

    .button {
      margin-top: 20px;
      padding: 10px 0;
      width: 170px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    &.big {
      .items > * {
        width: calc(50% - 10px);
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .items {
      padding: 0 10px;
      margin: 0;
    }
  }
}
</style>
