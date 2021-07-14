<template>
  <div class="order-summary">
    <h3 class="title fs-b">
      <slot></slot>
    </h3>
    <div v-if="payment && Object.keys(items).length" class="smallCards">
      <CartProduct
        v-for="item in items"
        :item="item"
        :small="'small'"
        :key="item.id"
      />
    </div>
    <div v-if="!carthover" class="information fs-m">
      <Property :name="'Quantity'" :value="itemsAmount" :otherValue="'0'" />
      <Property :name="'Sale'" :value="sale" :currency="'$'" :otherValue="'hide'" />
      <Property :name="'Shipping'" :value="shipping" :currency="'$'" :otherValue="'Free'" />
      <input class="voucher" type="text" placeholder="Voucher">
    </div>

    <div v-if="carthover" class="information carthover-shipping">
      <Property :name="'Shipping'" :value="shipping" :currency="'$'" :otherValue="'Free'" />
    </div>

    <div class="total fs-b">
      <Property :name="'Total Price'" :value="totalPrice" :currency="'$'" :otherValue="'$0'"/>

      <Button
        v-if="button"
        class="button"
        :theme="'dark'"
        :link="'/cart/payment'"
      >
        Checkout
      </Button>
    </div>
  </div>
</template>

<script>
import CartProduct from '@/components/cart/CartProduct.vue'
import Property from '@/components/product/Property.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'OrderSummary',
  props: ['items', 'payment', 'button', 'carthover'],
  components: {
    CartProduct,
    Button,
    Property
  },
  computed: {
    itemsAmount: function () {
      let amount = 0

      for (const key in this.items) {
        if (Object.hasOwnProperty.call(this.items, key)) {
          amount += this.items[key].quantity
        }
      }

      return amount
    },
    sale: function () {
      let sale = 0

      for (const key in this.items) {
        if (Object.hasOwnProperty.call(this.items, key)) {
          const element = this.items[key]

          if (element.sale) {
            sale += element.price * element.quantity * element.sale / 100
          }
        }
      }

      return sale
    },
    shipping: function () {
      let shipping = 0

      for (const key in this.items) {
        if (Object.hasOwnProperty.call(this.items, key)) {
          if (this.items[key].shipping) {
            shipping += this.items[key].shipping
          }
        }
      }

      return shipping
    },
    totalPrice: function () {
      let totalPrice = 0

      for (const key in this.items) {
        if (Object.hasOwnProperty.call(this.items, key)) {
          totalPrice += this.items[key].price * this.items[key].quantity
        }
      }

      totalPrice -= this.sale
      totalPrice += this.shipping

      return totalPrice
    }
  }
}
</script>

<style lang="scss">
.order-summary {
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: 4px 4px 10px $gray-light;

  .title {
    line-height: 130%;
  }

  & > *:not(:last-child) {
    width: 100%;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid $gray-greenish;
  }

  .voucher {
    border-radius: 20px;
    padding: 7px 20px;
    border: 1px solid $gray-dark;

    &::placeholder {
      color: $gray-dark;
    }
  }

  .information,
  .total {
    display: flex;
    flex-direction: column;
    line-height: 100%;

    .property {
      justify-content: space-between;
    }

    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  .carthover-shipping {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .total {
    .property__data {
      font-family: $font-family-headers;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    padding: 20px;

    & > *:not(:last-child) {
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .carthover-shipping {
      padding-bottom: 0;
    }

    .information,
    .total {
      & > *:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
