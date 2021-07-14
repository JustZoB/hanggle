<template>
  <div class="breadcrumbs">
    <router-link
      :to="item.link"
      v-for="item in breadcrumbs"
      :key="item.name"
      class="crumb fs-m"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  name: 'BreadCrumbs',
  computed: {
    breadcrumbs: function () {
      return store.getters.breadcrumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .crumb {
    position: relative;
    line-height: 100%;
    margin-top: 10px;
    color: $gray-dark;
    text-transform: capitalize;

    &:not(:last-child) {
      margin-right: 44px;

      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        right: -24px;
        top: 50%;
        width: 7px;
        height: 1px;
        background-color: $gray-dark;
      }

      &::before {
        transform-origin: right top;
        transform: translateY(-50%) rotate(50deg);
      }

      &::after {
        transform-origin: right bottom;
        transform: translateY(-50%) rotate(-50deg);
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding: 0 15px;
  }
}
</style>
