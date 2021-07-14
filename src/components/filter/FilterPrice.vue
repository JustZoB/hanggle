<template>
  <div class="filter filter__price">
    <div @click="toggleFilter()" class="title">
      <p>Price</p>
      <FontAwesomeIcon :class="{ reverse: isClosed }" class="icon" :icon="chevronUpIcon" />
    </div>
    <div :class="{ hidden: isClosed }" class="content">
      <div class="multi-range-slider">

        <input
          @mouseover="leftDotHover = true"
          @mouseout="leftDotHover = false"
          @mousedown="leftDotActive = true"
          @mouseup="leftDotActive = false"
          type="range"
          :min="minPrice"
          :max="maxPrice"
          v-model="leftRange"
        >

        <input
          @mouseover="rightDotHover = true"
          @mouseout="rightDotHover = false"
          @mousedown="rightDotActive = true"
          @mouseup="rightDotActive = false"
          type="range"
          :min="minPrice"
          :max="maxPrice"
          v-model="rightRange"
        >

        <div class="slider">
          <div class="track"></div>
          <div
            class="range"
            :style="`left: ${rangeStartOffsetPercents}%; right: ${rangeEndOffsetPercents}%`"
          >
          </div>
          <div
            class="thumb left"
            :class="{ hover: leftDotHover, active: leftDotActive }"
            :style="`left: ${rangeStartOffsetPercents}%`"
          ></div>
          <div
            class="thumb right"
            :class="{ hover: rightDotHover, active: rightDotActive }"
            :style="`right: ${rangeEndOffsetPercents}%`"
          ></div>
        </div>

        <div class="values fs-m">
          <p>${{ leftRange }}</p>
          <p>${{ rightRange }}</p>
        </div>
      </div>

      <div class="inputs">
        <input type="number" v-model="leftRange" :min="minPrice" :max="maxPrice" class="fs-m">
        <input type="number" v-model="rightRange" :min="minPrice" :max="maxPrice" class="fs-m">
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'FilterPrice',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      isClosed: false,
      chevronUpIcon: faChevronUp,
      leftDotHover: false,
      leftDotActive: false,
      rightDotHover: false,
      rightDotActive: false
    }
  },
  computed: {
    list: function () {
      return store.getters.productPage
    },
    leftRange: {
      get () {
        return store.state.customFilters.price.min
      },
      set (left) {
        store.dispatch('customFiltersPriceChange', {
          left: left,
          right: this.rightRange
        })

        return left
      }
    },
    rightRange: {
      get () {
        return store.state.customFilters.price.max
      },
      set (right) {
        store.dispatch('customFiltersPriceChange', {
          left: this.leftRange,
          right: right
        })

        return right
      }
    },
    minPrice: function () {
      return store.getters.minPrice
    },
    maxPrice: function () {
      return store.getters.maxPrice
    },
    rangeStartOffsetPercents: function () {
      return (this.leftRange - this.minPrice) / (this.maxPrice - this.minPrice) * 100
    },
    rangeEndOffsetPercents: function () {
      return (1 - (this.rightRange - this.minPrice) / (this.maxPrice - this.minPrice)) * 100
    }
  },
  methods: {
    toggleFilter: function () {
      this.isClosed = !this.isClosed
    }
  },
  watch: {
    list: function () {
      store.dispatch('setMinMaxPrice', {
        products: this.list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.filter.filter__price {
  .content {
    height: 100px;
    overflow: inherit;
    margin-bottom: 20px;

    &.hidden {
      height: 0;
      overflow: hidden;
    }

    .checkbox-list {
      display: flex;
      flex-wrap: wrap;
      margin: -5px;

      & > * {
        width: calc(33.3333% - 10px);
        margin: 5px;
      }
    }
  }

  .multi-range-slider {
    position: relative;
    margin-top: 20px;

    input[type=range] {
      position: absolute;
      pointer-events: none;
      -webkit-appearance: none;
      z-index: 2;
      height: 5px;
      width: 100%;
      opacity: 0;

      &::-webkit-slider-thumb {
        pointer-events: all;
        width: 30px;
        height: 30px;
        border-radius: 0;
        border: 0 none;
        background-color: red;
        -webkit-appearance: none;
      }
    }

    .slider {
      position: relative;
      z-index: 1;
      height: 5px;
      margin: 0 15px;

      & > .track,
      & > .range {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 5px;
      }

      & > .track {
        z-index: 1;
        background-color: $gray-light;
      }

      & > .range {
        max-width: 100%;
        z-index: 2;
        background-color: $gray-greenish;
      }

      & > .thumb {
        position: absolute;
        z-index: 3;
        width: 30px;
        height: 30px;
        background-color: $gray-greenish;
        border-radius: 50%;
        box-shadow: 0 0 0 0 $gray-greenish_opacity_10;
        transition: box-shadow .3s ease-in-out;

        &.left {
          left: 0;
          transform: translate(-15px, -12.5px);
        }

        &.right {
          right: 0;
          transform: translate(15px, -12.5px);
        }

        &.hover {
          box-shadow: 0 0 0 10px $gray-greenish_opacity_10;
        }

        &.active {
          box-shadow: 0 0 0 20px $gray-greenish_opacity_20;
        }
      }
    }

    .values {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }
  }

  .inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 80px;
      padding: 10px 15px;
      border: 1px solid $gray-greenish;
      border-radius: 37px;
      font-family: $font-family-body;
      line-height: 100%;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .inputs input {
      width: 60px;
      padding: 7px 15px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .content {
      .checkbox-list {
        margin: 0;
      }
    }
  }
}
</style>
