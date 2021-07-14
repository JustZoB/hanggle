<template>
  <div class="item" :class="small">
    <router-link class="image" :to="`/item/${item.id}`" :title="item.name">
      <img v-if="item.images && item.images[0]" :src="require(`@/assets/images/products/${item.images[0]}`)" :alt="item.name">
      <img v-else :src="require('@/assets/images/noImage.jpg')" alt="No image">
    </router-link>
    <div class="information">
      <div class="row">
        <router-link class="title fs-b" :to="`/item/${item.id}`" :title="item.name">
          <h3>{{ item.name }}</h3>
        </router-link>
        <div class="cost">
          <div v-if="item.sale" class="sale fs-m">
            <p>Sale -{{ item.sale }}%</p>
          </div>
          <div class="price fs-b">${{ item.price }}</div>
        </div>
      </div>
      <div v-if="!small" class="row">
        <div class="about fs-b">
          <Property :name="'Color'" :value="item.color" />
          <Property :name="'Size'" :value="item.size" :otherValue="'One size'" />
          <div class="quantity property">
            <p class="property__name">Quantity</p>
            <div
              @click="decreaseQuantity()"
              class="reduce"
            >
              -
            </div>
            <p v-if="item.quantity" class="property__data">{{ item.quantity }}</p>
            <p v-else class="property__data">1</p>
            <div
              @click="increaseQuantity()"
              class="add"
            >
              +
            </div>
          </div>
        </div>
        <FavouritesIconButton :item="item" :theme="theme" :size="'b'" />
      </div>
      <div v-if="!small" class="row">
        <div class="about fs-b">
          <Property :name="'Shipping'" :value="item.shipping" :currency="'$'" :otherValue="'Free'" />
        </div>
        <div
          class="delete"
          title="Remove from cart"
        >
          <IconDelete
            @click="deleteProduct()"
            :theme="theme"
          />
        </div>
      </div>

      <div v-if="small" class="row">
        <div class="about fs-m">
          <Property :name="'Color'" :value="item.color" />
          <Property :name="'Size'" :value="item.size" :otherValue="'One size'" />
        </div>
        <FavouritesIconButton :item="item" :theme="theme" :size="'s'" />
      </div>
      <div v-if="small" class="row">
        <div class="about fs-m">
          <Property :name="'Quantity'" :value="item.quantity" />
        </div>
        <div
          class="delete"
          title="Remove from cart"
        >
          <IconDelete
            @click="deleteProduct()"
            :small="'small'"
            :theme="theme"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import Property from '@/components/product/Property.vue'
import FavouritesIconButton from '@/components/cart/FavouritesIconButton.vue'
import IconDelete from '@/components/icons/IconDelete.vue'

export default {
  name: 'Cart',
  props: ['item', 'small'],
  data () {
    return {
      theme: 'light',
      quantity: this.item.quantity ? this.item.quantity : 1
    }
  },
  components: {
    Property,
    FavouritesIconButton,
    IconDelete
  },
  methods: {
    increaseQuantity: function () {
      store.dispatch('cartIncrementQuantity', {
        item: this.item
      })
    },
    decreaseQuantity: function () {
      if (this.item.quantity >= 2) {
        store.dispatch('cartDecrementQuantity', {
          item: this.item
        })
      }
    },
    deleteProduct: function () {
      store.dispatch('cartDelete', {
        item: this.item
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  width: 100%;
  padding: 30px;
  box-shadow: 4px 4px 10px $gray-light;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  .image {
    position: relative;
    display: flex;
    width: 160px;
    height: 160px;
    min-width: 160px;
    overflow: hidden;
    margin-right: 30px;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex: 1;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .cost {
        display: flex;
        align-items: center;

        .sale {
          background-color: $gray-greenish;
          border-radius: 33px;
          padding: 8px 16px;
        }

        .price {
          text-align: end;
          min-width: 80px;
          margin-left: 20px;
        }
      }

      .quantity {
        display: flex;

        & > *:not(:last-child) {
          margin-right: 30px;
        }

        .reduce,
        .add {
          cursor: pointer;
          user-select: none;
          color: $gray-dark;
        }
      }

      .property__name {
        color: $gray-dark;
      }

      .delete {
        display: flex;
        align-items: flex-end;

        .icon {
          cursor: pointer;
        }
      }

      .title {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        margin-right: 20px;

        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .title,
      .price {
        font-family: $font-family-headers;
        line-height: 130%;
      }

      .about {
        display: flex;
        flex-direction: column;
        line-height: 100%;

        & > *:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }

  &.small {
    box-shadow: unset;
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    .image {
      width: 87px;
      height: 87px;
      min-height: 87px;
      min-width: 87px;
      margin-right: 10px;
    }

    .information {
      width: calc(100% - 97px);

      & > *:last-child {
        align-items: flex-end;
        margin-top: -2px;
      }

      .row {
        &:not(:last-child) {
          margin-bottom: 10px;
        }

        .cost .sale {
          display: none;
        }

        .price {
          min-width: unset;
        }

        .about {
          & > * {
            justify-content: unset;
            min-width: unset;

            & > :first-child {
              min-width: 50px;
            }
          }

          .size {
            min-width: 150px;
          }

          &__name {
            margin-right: 10px;
          }
        }
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    padding: 20px;

    .image {
      margin-right: 20px;
    }

    .information .row {
      .about > * {
        min-width: 190px;

        &:not(:last-child) {
          margin-right: 20px;
        }
      }

      .quantity > *:not(:last-child) {
        margin-right: 15px;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .image {
      width: 170px;
      height: 170px;
      min-width: 170px;
      margin-right: 20px;
    }

    .information {
      .row {
        &:not(:last-child) {
          margin-bottom: 15px;
        }

        &:last-child {
          margin-top: -8px;
          align-items: flex-end;
        }

        .about {
          flex-direction: column;

          & > *:not(:last-child) {
            margin-right: 0;
            margin-bottom: 8px;
          }
        }

        .cost .price {
          min-width: 0;
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    flex-direction: column;

    .image {
      width: 100%;
      height: 100%;
      min-width: unset;
      margin-right: 0;
      margin-bottom: 20px;

      &::before {
        content: "";
        display: block;
        margin-top: 90%;
      }
    }

    .information .row .cost .sale {
      position: absolute;
      top: 40px;
      left: 40px;
    }
  }
}
</style>
