<template>
  <section class="section">
    <h2 v-if="title" class="title fs-t">{{ title }}</h2>

    <div class="items">
      <BrandCard
        v-for="item in items"
        :key="item.name"
        :item="item"
      />
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
import BrandCard from '@/components/BrandCard.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'BrandsBlock',
  components: {
    BrandCard,
    Button
  },
  props: ['items', 'title', 'button', 'buttonTheme', 'buttonLink']
}
</script>

<style lang="scss" scoped>
.section {
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    & > * {
      width: calc(16.6667% - 10px);
      margin: 5px;
    }
  }

  .button {
    align-self: center;
    margin-top: 30px;
    width: 300px;
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .items > * {
      width: calc(50% - 10px);
    }

    .button {
      margin-top: 20px;
      padding: 10px 0;
      width: 170px;
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
