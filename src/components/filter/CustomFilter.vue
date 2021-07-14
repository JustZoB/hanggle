<template>
  <div class="filters">
    <p class="title fs-b">Filters</p>
    <FilterGender v-if="!gender" />
    <FilterBrand v-if="!brand" />
    <FilterSize />
    <FilterPrice v-if="!price" />
    <Button @click="resetFilters()" :theme="'light'">
      Clear Filters
    </Button>
  </div>
</template>

<script>
import store from '@/store/index'
import FilterGender from '@/components/filter/FilterGender.vue'
import FilterBrand from '@/components/filter/FilterBrand.vue'
import FilterSize from '@/components/filter/FilterSize.vue'
import FilterPrice from '@/components/filter/FilterPrice.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'CustomFilter',
  components: {
    FilterGender,
    FilterBrand,
    FilterSize,
    FilterPrice,
    Button
  },
  props: ['gender', 'brand', 'size', 'price'],
  methods: {
    resetFilters: function () {
      store.dispatch('clearCustomFilters')
    }
  }
}
</script>

<style lang="scss">
.filters {
  & > .title {
    line-height: 100%;
    margin-bottom: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid $gray-greenish;
  }

  .filter.filter__price .content.hidden {
    margin-bottom: 0;
  }

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .filter {
    display: flex;
    flex-direction: column;

    .title {
      position: relative;
      cursor: pointer;
      margin-bottom: 20px;

      p {
        font-size: map-get($font-size-big, 'exl');
        line-height: 100%;
      }

      .icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        transition: 0.2s;

        &.reverse {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    .content {
      transition: 0.3s;
      overflow: hidden;

      &.hidden {
        height: 0;
      }

      & > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }

  & > .button {
    width: 100%;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    & > .title {
      margin-bottom: 30px;
      padding-bottom: 30px;
    }
    .filter .title p {
      font-size: map-get($font-size-big, 'xl');
    }
  }
}
</style>
