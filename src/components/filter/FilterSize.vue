<template>
  <div class="filter filter__size">
    <div @click="toggleFilter()" class="title">
      <p>Clothing Size</p>
      <FontAwesomeIcon
        :class="{ reverse: isClosed }"
        class="icon"
        :icon="chevronUpIcon"
      />
    </div>
    <div :class="{ hidden: isClosed }" class="content">
      <div class="checkbox-list">
        <div
          class="checkbox"
          v-for="item of sizes"
          :item="item"
          :key="item.smallName"
        >
          <input
            type="checkbox"
            :id="item.smallName"
            :value="item.smallName"
            v-model="sizesCheckedList"
          >
          <label
            :for="item.smallName"
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
import sizes from '@/assets/json/sizes.json'

export default {
  name: 'FilterSize',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      isClosed: false,
      chevronUpIcon: faChevronUp,
      sizes: sizes
    }
  },
  computed: {
    list: function () {
      return store.getters.productPage
    },
    sizesCheckedList: {
      get () {
        return store.getters.sizeCheckedList
      },
      set (list) {
        store.dispatch('customFiltersSizesToggle', {
          list: list
        })

        return list
      }
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
.filter.filter__size {
  .content {
    height: 150px;

    .checkbox-list {
      display: flex;
      flex-wrap: wrap;
      margin: -5px;

      .checkbox {
        position: relative;
        border: 1px solid $gray-greenish;
        height: 40px;
        width: calc(33.3333% - 10px);
        margin: 5px;

        input {
          position: absolute;
          z-index: -1;
          opacity: 0;

          &:checked + label {
            background-color: $gray-greenish;
          }
        }

        label {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
          line-height: 100%;
          cursor: pointer;
          background-color: unset;
        }

        @media (max-width: map-get($grid-breakpoints, 'xl')) {
          height: 35px;

          label {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .content {
      height: 125px;
    }
  }
}
</style>
