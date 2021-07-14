<template>
  <div class="filter filter__brand">
    <div @click="toggleFilter()" class="title">
      <p>Brand</p>
      <FontAwesomeIcon
        :class="{ reverse: isClosed }"
        class="icon"
        :icon="chevronUpIcon"
      />
    </div>
    <div :class="{ hidden: isClosed }" class="content">
      <div class="search brand-search">
        <input type="text" placeholder="Search" v-model="brandSearch" />
        <IconSearch :size="'s'" />
      </div>
      <div class="checkbox-list">
        <div
          class="checkbox"
          v-for="item of brandFilteredList"
          :item="item"
          :key="item.name"
        >
          <input
            type="checkbox"
            :id="item.link"
            :value="item.link"
            v-model="brandsCheckedList"
          >
          <label
            :for="item.link"
            class="fs-m"
          >
            {{ item.name }}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import brands from '@/assets/json/brands.json'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'FilterBrand',
  components: {
    FontAwesomeIcon,
    IconSearch
  },
  data () {
    return {
      isClosed: false,
      chevronUpIcon: faChevronUp
    }
  },
  created () {
    store.dispatch('setBrandFilteredList', {
      brands: brands,
      search: this.brandSearch
    })
  },
  computed: {
    list: function () {
      return store.getters.productPage
    },
    brandsCheckedList: {
      get () {
        return store.getters.brandCheckedList
      },
      set (list) {
        store.dispatch('customFiltersBrandsToggle', {
          list: list
        })

        return list
      }
    },
    brandSearch: {
      get () {
        return store.getters.brandSearchInput
      },
      set (value) {
        store.dispatch('setBrandFilteredList', {
          brands: brands,
          search: value
        })

        return value
      }
    },
    brandFilteredList: function () {
      return store.getters.brandFilteredList
    }
  },
  methods: {
    toggleFilter: function () {
      this.isClosed = !this.isClosed
    }
  }
}
</script>

<style lang="scss" scoped>
.filter.filter__brand {
  .content {
    height: 252px;

    .search {
      position: relative;

      input {
        width: calc(100% - 67px);
        background-color: unset;
        border: 1px solid $black;
        padding: 0 45px 0 20px;
        height: 38px;
        border-radius: 20px;
      }

      .icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .checkbox-list {
      display: flex;
      flex-direction: column;
      max-height: 190px;
      margin-right: 5px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 1px;
      }

      &::-webkit-scrollbar-track {
        background-color: $gray-greenish;
        box-shadow: inset 0 0 1px $gray-greenish;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $gray-greenish;
        outline: 2px solid $gray-greenish;
        border-radius: 5px;
      }

      .checkbox {
        &:not(:last-child) {
          margin-bottom: 10px;
        }

        input {
          position: absolute;
          z-index: -1;
          opacity: 0;

          &:checked + label::after {
            display: block;
          }
        }

        label {
          position: relative;
          display: inline-flex;
          align-items: center;
          user-select: none;
          line-height: 100%;
          cursor: pointer;

          &::before {
            content: '';
            display: inline-block;
            width: 28px;
            height: 28px;
            margin-right: 10px;
            border: 1px solid $gray-greenish;
          }

          &::after {
            content: '';
            position: absolute;
            left: 3px;
            top: 3px;
            display: none;
            width: 24px;
            height: 24px;
            background-color: $gray-greenish;
          }
        }

        @media (max-width: map-get($grid-breakpoints, 'xl')) {
          label {
            &::before {
              width: 26px;
              height: 26px;
            }

            &::after {
              width: 22px;
              height: 22px;
            }
          }
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .content {
      height: 202px;

      .checkbox-list {
        max-height: 140px;
      }
    }
  }
}
</style>
