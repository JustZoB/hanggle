<template>
  <div class="submenu">
    <div v-if="thisCategory && thisSubcategory">
      <router-link class="back fs-b" :to="`/${gender}/${thisCategory}`">{{ thisCategoryList.name }}</router-link>
      <div class="subcategories fs-m">
        <router-link
          v-for="subcategory in thisCategoryList.subcategories"
          :key="subcategory.name"
          :to="subcategory.href"
        >
          {{ subcategory.name }}
        </router-link>
      </div>
    </div>

    <div v-else-if="thisCategory && !thisSubcategory">
      <router-link class="back fs-b" :to="`/${gender}`">Categories</router-link>
      <div class="subcategories fs-m">
        <router-link
          v-for="subcategory in thisCategoryList.subcategories"
          :key="subcategory.name"
          :to="subcategory.href"
        >
          {{ subcategory.name }}
        </router-link>
      </div>
    </div>

    <div v-else class="categories">
      <div class="fs-b" v-for="category in categoryList" :key="category.name">
        <router-link class="category" :to="category.href">{{ category.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '@/assets/json/categories.json'

export default {
  name: 'Subcategories',
  props: ['gender', 'thisCategory', 'thisSubcategory'],
  computed: {
    categoryList: function () {
      return categories[this.gender]
    },
    thisCategoryList: function () {
      if (this.thisCategory) {
        for (const key in categories[this.gender]) {
          if (Object.hasOwnProperty.call(categories[this.gender], key)) {
            if (this.thisCategory === categories[this.gender][key].category) {
              return categories[this.gender][key]
            }
          }
        }
      }

      return undefined
    }
  }
}
</script>

<style lang="scss" scoped>
.submenu {
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    width: fit-content;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid $black;
    }
  }

  .categories > * {
    &:not(:last-child) {
      margin-bottom: 20px;
    }

    & > a {
      position: relative;
      padding-right: 20px;

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        width: 9px;
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

  .back {
    position: relative;
    display: block;
    margin-bottom: 20px;
    line-height: 100%;
    padding-left: 20px;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 9px;
      height: 1px;
      background-color: $gray-dark;
    }

    &::before {
      transform-origin: left top;
      transform: translateY(-50%) rotate(50deg);
    }

    &::after {
      transform-origin: left bottom;
      transform: translateY(-50%) rotate(-50deg);
    }
  }

  .category {
    display: block;
    margin-bottom: 20px;
    line-height: 100%;

    &.active {
      cursor: default;
      width: fit-content;
      border-bottom: 1px solid $black;
    }
  }

  .subcategories {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    line-height: 100%;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }

    & > .router-link-exact-active.router-link-active {
      cursor: default;
      width: fit-content;
      border-bottom: 1px solid $black;
    }
  }
}
</style>
