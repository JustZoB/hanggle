<template>
  <div @click="navbarMenuModal(true)" class="item">
    <div class="icon-wrap">
      <IconProducts :theme="'light'" />
    </div>
    <p>Products</p>
  </div>
</template>

<script>
import store from '@/store/index'
import IconProducts from '@/components/icons/IconProducts.vue'

export default {
  name: 'HeaderTopProducts',
  components: {
    IconProducts
  },
  methods: {
    navbarMenuModal: function (isOpen) {
      store.dispatch('navbarMenuModal', {
        isOpen: isOpen
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 20px;
    top: 50%;
    width: 10px;
    height: 1px;
    background-color: $black;
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
</style>
