<template>
  <transition name="fade" mode="out-in">
    <aside
      v-if="!isMobile || isMobile && isFiltersModalOpen"
      class="aside"
    >
      <SubcategoriesMenu
        class="subcategories"
        :gender="gender"
        :thisCategory="thisCategory"
        :thisSubcategory="thisSubcategory"
      />
      <CustomFilter
        :list="list"
        :gender="gender"
        :price="price"
        :brand="brand"
      />
      <div v-if="isMobile" class="close" @click="filtersModal(false)"></div>
      <Button v-if="isMobile" :theme="'dark'" @click="filtersModal(false)">
        Show ({{ Object.keys(filtredList).length }})
      </Button>
    </aside>
  </transition>
</template>

<script>
import store from '@/store/index'
import CustomFilter from '@/components/filter/CustomFilter.vue'
import SubcategoriesMenu from '@/components/SubcategoriesMenu.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'AsideMenu',
  components: {
    CustomFilter,
    SubcategoriesMenu,
    Button
  },
  props: ['list', 'filtredList', 'gender', 'brand', 'price', 'thisCategory', 'thisSubcategory'],
  computed: {
    isMobile: function () {
      return store.getters.isMobile
    },
    isFiltersModalOpen: function () {
      return store.getters.isFiltersModalOpen
    }
  },
  methods: {
    filtersModal: function (isOpen) {
      store.dispatch('filtersModal', {
        isOpen: isOpen
      })
    }
  }
}
</script>

<style>

</style>
