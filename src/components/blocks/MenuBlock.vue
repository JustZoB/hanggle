<template>
  <section class="section menuBlock">
    <Subscribe />
    <div class="menuBlock__links">
      <MenuBlockItems
        v-for="item in links"
        :key="item.name"
        :item="item"
      />
    </div>
  </section>
</template>

<script>
import Subscribe from '@/components/blocks/Subscribe.vue'
import MenuBlockItems from '@/components/MenuBlockItems.vue'

export default {
  name: 'MenuBlock',
  components: {
    Subscribe,
    MenuBlockItems
  },
  props: ['links']
}
</script>

<style lang="scss" scoped>
.menuBlock {
  display: flex;
  flex-direction: row;
  height: 530px;
  margin-left: -5px;
  margin-right: -5px;

  & > * {
    width: 50%;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    & > * {
      width: 33.333%;
      height: 50%;
      padding: 5px;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    height: 430px;
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    height: 340px;
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    flex-direction: column;
    height: unset;

    & > * {
      width: 100%;
    }

    &__links {
      margin: 4px 0 0 0;
      padding: 0 10px;

      & > * {
        width: 50%;
        height: 250px;
        padding: 4px;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    &__links > * {
      height: 168px;
    }
  }
}
</style>
