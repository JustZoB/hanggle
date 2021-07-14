<template>
  <div class="head">
    <div class="title">
      <h1 class="fs-t">{{ title }}</h1>
      <p v-if="!(amount === undefined)" class="amount">({{ amount }})</p>
    </div>
    <div
      v-if="isMobile && !withoutFilters"
      class="filtersButton"
      @click="filtersModal(true)"
    >
      <IconFilters />
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import IconFilters from '@/components/icons/IconFilters.vue'

export default {
  name: 'ProductsPageHead',
  components: {
    IconFilters
  },
  props: ['title', 'amount', 'withoutFilters'],
  computed: {
    isMobile: function () {
      return store.getters.isMobile
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
