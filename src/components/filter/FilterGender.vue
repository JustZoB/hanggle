<template>
  <div class="filter filter__gender">
    <div @click="toggleFilter()" class="title">
      <p>Gender</p>
      <FontAwesomeIcon :class="{ reverse: isClosed }" class="icon" :icon="chevronUpIcon" />
    </div>
    <div :class="{ hidden: isClosed }" class="content">
      <div class="radio-list fs-m">
        <label
          class="item"
        >
          All
          <input
            type="radio"
            v-model="gender"
            value="all"
            checked
          >
          <span class="checkmark"></span>
        </label>
        <label
          class="item"
        >
          Women
          <input
            type="radio"
            v-model="gender"
            value="women"
          >
          <span class="checkmark"></span>
        </label>
        <label
          class="item"
        >
          Men
          <input
            type="radio"
            v-model="gender"
            value="men"
          >
          <span class="checkmark"></span>
        </label>
        <label
          class="item"
        >
          Girls
          <input
            type="radio"
            v-model="gender"
            value="girls"
          >
          <span class="checkmark"></span>
        </label>
        <label
          class="item"
        >
          Boys
          <input
            type="radio"
            v-model="gender"
            value="boys"
          >
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'FilterGender',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      isClosed: false,
      chevronUpIcon: faChevronUp
    }
  },
  computed: {
    gender: {
      get () {
        return store.state.customFilters.gender
      },
      set (gender) {
        store.dispatch('customFiltersGenderChange', {
          gender: gender
        })

        return gender
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
.filter.filter__gender {
  .content {
    height: 190px;

    .radio-list {
      display: flex;
      flex-direction: column;
      line-height: 20px;

      .item {
        position: relative;
        display: flex;
        align-items: center;
        width: fit-content;
        height: 30px;
        padding-left: 40px;
        cursor: pointer;

        input {
          position: absolute;
          opacity: 0;

          &:checked + .checkmark::before {
            display: block;
          }
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid $gray-greenish;

          &::before {
            content: '';
            display: none;
            position: absolute;
            top: 2px;
            left: 2px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: $gray-greenish;
          }
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .content {
      height: 180px;

      .radio-list {
        .item {
          height: 28px;

          .checkmark {
            width: 28px;
            height: 28px;

            &::before {
              width: 22px;
              height: 22px;
            }
          }
        }
      }
    }
  }
}
</style>
