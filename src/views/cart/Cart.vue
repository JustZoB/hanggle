<template>
  <div class="cart page">
    <BreadCrumbs />

    <section class="section">
      <div class="title">
        <h1 class="fs-t">Cart</h1>
        <p class="amount">({{ itemsAmount }})</p>
      </div>
      <div class="block">
        <div v-if="Object.keys(list).length" class="items">
          <CartProduct
            v-for="item in list"
            :item="item"
            :key="item.id"
          />
        </div>

        <div v-else class="items">
          <p class="fs-b">Cart is empty</p>
        </div>

        <OrderSummary
          :items="list"
          :button="true"
          class="order-summary"
        >
          Order Summary
        </OrderSummary>
      </div>
    </section>
  </div>
</template>

<script>
import store from '@/store/index'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import OrderSummary from '@/components/cart/OrderSummary.vue'
import CartProduct from '@/components/cart/CartProduct.vue'

export default {
  name: 'Cart',
  components: {
    BreadCrumbs,
    CartProduct,
    OrderSummary
  },
  created () {
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
  },
  updated () {
    store.dispatch('setBreadCrumbs', {
      crumbs: this.crumbs
    })
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

      return amount
    },
    crumbs: function () {
      return ['cart']
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  .section {
    margin-top: 30px;
  }

  .block {
    display: flex;

    .items {
      flex: 1;
      margin-right: 20px;
    }

    .order-summary {
      background-color: $white;
      width: calc(25% - 10px);
      height: fit-content;
    }
  }
}
</style>
