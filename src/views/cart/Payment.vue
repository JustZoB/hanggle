<template>
  <div class="payment page">
    <BreadCrumbs />

    <section class="section">
      <div class="title">
        <h1 class="fs-t">Payment</h1>
      </div>
      <div class="block">
        <div class="block__main">
          <PaymentShipping />
          <PaymentPayment />
        </div>
        <OrderSummary
          :items="list"
          :payment="true"
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
import PaymentShipping from '@/components/payment/PaymentShipping.vue'
import PaymentPayment from '@/components/payment/PaymentPayment.vue'

export default {
  name: 'Payment',
  components: {
    BreadCrumbs,
    PaymentShipping,
    PaymentPayment,
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
    crumbs: function () {
      return ['cart', 'payment']
    }
  }
}
</script>

<style lang="scss" scoped>
.payment {
  .section {
    margin-top: 30px;
  }

  .block {
    display: flex;

    &__main {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;

      & > *:not(:last-child) {
        margin-bottom: 20px;
      }

      .button {
        width: 500px;
        margin-top: 10px;
      }
    }

    .order-summary {
      width: calc(25% - 10px);
      height: fit-content;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .block__main {
      .button {
        width: 100%;
      }
    }
  }
}
</style>
