<template>
  <Button
    @click="addToCart()"
    v-if="!isAdded"
    :theme="theme"
  >
    <slot>
      <IconCart :theme="theme" />
      <p>Add To Cart</p>
    </slot>
  </Button>

  <Button
    v-else
    :link="'/cart'"
    :theme="theme"
  >
    <slot>
      <IconCart :theme="theme" :fill="'fill'" />
      <p>Go To Cart</p>
    </slot>
  </Button>
</template>

<script>
import store from '@/store/index'
import Button from '@/components/Button.vue'
import IconCart from '@/components/icons/IconCart.vue'

export default {
  name: 'ButtonAddToCart',
  components: {
    Button,
    IconCart
  },
  props: ['item', 'theme'],
  computed: {
    isAdded: function () {
      let isAdded = false

      Object.entries(store.getters.cart).forEach((element) => {
        if (parseInt(element[0]) === this.item.id) {
          isAdded = true
        }
      })

      return isAdded
    }
  },
  methods: {
    addToCart: function () {
      store.dispatch('cartAdd', {
        item: this.item
      })
    }
  }
}
</script>
