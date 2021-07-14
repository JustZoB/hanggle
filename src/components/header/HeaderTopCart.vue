<template>
  <div @mouseover="mouseOver" @mouseout="mouseOut" class="cart-wrap">
    <router-link to="/cart" class="item">
      <div class="icon-wrap">
        <IconCart :theme="'light'" />
        <div class="amount">{{ itemsAmount }}</div>
      </div>
      <p>Cart</p>
    </router-link>
    <div v-if="!isMobile" class="cart-hover">
      <OrderSummary
        v-show="isCartShown"
        :items="list"
        :carthover="true"
        :payment="true"
        :button="true"
        class="order-summary"
      >
        Cart
      </OrderSummary>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import OrderSummary from '@/components/cart/OrderSummary.vue'
import IconCart from '@/components/icons/IconCart.vue'

export default {
  name: 'HeaderTopCart',
  components: {
    OrderSummary,
    IconCart
  },
  computed: {
    list: function () {
      return store.getters.cart
    },
    itemsAmount: function () {
      let amount = 0

      for (const key in this.list) {
        if (Object.hasOwnProperty.call(this.list, key)) {
          amount += this.list[key].quantity
        }
      }

      if (amount > 99) {
        amount = '99+'
      }

      return amount
    },
    isMobile: function () {
      return store.getters.isMobile
    }
  },
  data () {
    return {
      isCartShown: false
    }
  },
  methods: {
    mouseOver: function () {
      this.isCartShown = true
    },
    mouseOut: function () {
      this.isCartShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-wrap {
  position: relative;

  .icon-wrap {
    display: flex;
    justify-content: center;

    .amount {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 0;
      bottom: 0;
      transform: translate(40%, 25%);
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: $black;
      font-size: 12px;
      line-height: 100%;
      color: $white;
    }
  }

  .cart-hover {
    position: absolute;
    padding-top: 27px;
    top: 40px;
    left: -225px;
    z-index: 10;
    cursor: default;

    .order-summary {
      width: 422px;
      background-color: $white;
      height: fit-content;
    }
  }
}
</style>
