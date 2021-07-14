<template>
  <section class="section item">
    <div class="images">
      <div class="big">
        <transition name="fast_fade" mode="out-in">
          <img
            :key="bigImage"
            :src="bigImage"
            :alt="item.name"
            ref="image"
          >
        </transition>
      </div>
      <div v-if="item.images" class="smalls">
        <div
          class="image"
          v-for="image in item.images.slice(0, item.images.length)"
          :key="image"
          @click="showThisImage(image)"
          :class="{ active: image === selected }"
        >
          <img :src="require(`@/assets/images/products/${image}`)">
        </div>
      </div>
      <div v-if="item.sale" class="sale fs-m">
        <p>Sale -{{ item.sale }}%</p>
      </div>
    </div>
    <div class="information">
      <h1 class="title fs-t">{{ item.name }}</h1>
      <div class="about fs-b">
        <div class="column">
          <Property :name="'Brand'" :value="item.brand.name" />
          <Property :name="'Color'" :value="item.color" />
        </div>
        <div class="column">
          <Property :name="'Condition'" :value="item.condition" />
          <Property :name="'Size'" :value="item.size" :otherValue="'One size'" />
        </div>
      </div>
      <div v-if="item.sale" class="price">
        <div class="price_new fs-t">${{ priceSale }}</div>
        <div class="price_old fs-b">${{ item.price }}</div>
      </div>
      <div v-else class="price fs-t">
        ${{ item.price }}
      </div>
      <div class="buttons">
        <ButtonAddToCart :item='item' :theme="'dark'" />
        <ButtonAddToFavourites :item='item' :theme="'light'" />
      </div>
      <ProductAboutMore v-if="!isMobile" :item='item' />
    </div>
  </section>
</template>

<script>
import store from '@/store/index'
import ButtonAddToCart from '@/components/product/ButtonAddToCart.vue'
import ButtonAddToFavourites from '@/components/product/ButtonAddToFavourites.vue'
import Property from '@/components/product/Property.vue'
import ProductAboutMore from '@/components/product/ProductAboutMore.vue'

export default {
  name: 'Product',
  props: ['item'],
  components: {
    ButtonAddToCart,
    ButtonAddToFavourites,
    Property,
    ProductAboutMore
  },
  data () {
    return {
      bigImage: '',
      selected: ''
    }
  },
  created () {
    this.bigImage = require(`@/assets/images/products/${this.item.images[0]}`)
    this.selected = this.item.images[0]
  },
  mounted () {
    if (this.$refs.image.clientHeight > this.$refs.image.clientWidth) {
      this.$refs.image.classList.add('high')
    } else if (this.$refs.image.clientHeight < this.$refs.image.clientWidth) {
      this.$refs.image.classList.add('long')
    }
  },
  destroyed () {
    store.dispatch('recentlyViewedListAdd', {
      item: this.item
    })
  },
  updated () {
    store.dispatch('recentlyViewedListAdd', {
      item: this.item
    })
  },
  computed: {
    isMobile: function () {
      return store.getters.isMobile
    },
    priceSale: function () {
      let priceSale = this.item.price

      if (this.item.sale) {
        priceSale = this.item.price - this.item.price * this.item.sale / 100
      }

      return priceSale
    }
  },
  methods: {
    showThisImage (image) {
      this.bigImage = require(`@/assets/images/products/${image}`)
      this.selected = image
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: row;

  & > * {
    width: 50%;
  }

  .images {
    position: relative;
    display: flex;

    .big {
      position: relative;
      display: flex;
      width: calc(83% - 5px);
      flex: 1;
      height: fit-content;
      overflow: hidden;

      &::before {
        content: "";
        display: block;
        margin-top: 100%;
      }

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

    .smalls {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      width: calc(17% - 5px);

      .image {
        position: relative;
        display: flex;
        height: fit-content;
        overflow: hidden;
        border: 2px solid $gray-light;
        cursor: pointer;

        &:hover,
        &.active {
          border: 2px solid $gray-greenish;
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        &::before {
          content: "";
          display: block;
          margin-top: 100%;
        }

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
    }

    .sale {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: $white;
      border-radius: 33px;
      padding: 8px 16px;
    }
  }

  .information {
    display: flex;
    flex-direction: column;
    padding-left: 40px;

    & > *:not(:last-child) {
      margin-bottom: 30px;
    }

    .about {
      display: flex;

      & > *:not(:last-child) {
        margin-right: 30px;
      }

      .column {
        display: flex;
        flex-direction: column;
        min-width: 200px;

        & > *:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }

    .price {
      display: flex;
      align-items: center;
      font-family: $font-family-headers;
      line-height: 130%;

      &_new {
        margin-right: 20px;
      }

      &_old {
        text-decoration: line-through;
        color: $gray-dark;
      }
    }

    .buttons {
      display: flex;

      & > * {
        width: calc(50% - 5px);

        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .information {
      & > *:not(:last-child) {
        margin-bottom: 20px;
      }

      .about {
        flex-direction: column;

        & > *:not(:last-child) {
          margin-bottom: 20px;
        }

        .column {
          & > *:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }

      .buttons {
        flex-direction: column;

        & > * {
          width: 100%;

          &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    flex-direction: column;

    & > * {
      width: 100%;
    }

    .images {
      flex-direction: column;

      .big {
        width: 100%;
      }

      .smalls {
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-left: 0;
        margin-top: 10px;

        & > * {
          width: calc(33.3333% - 6.6666px);
          margin-bottom: 10px;

          &:not(:last-child) {
            margin-right: 10px;
          }

          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
    }

    .information {
      margin-top: 20px;
      padding-left: 0;

      .about {
        & > *:not(:last-child) {
          margin-bottom: 10px;
        }

        .column {
          & > *:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }

      .buttons {
        flex-direction: row;

        & > * {
          width: calc(50% - 5px);
          padding-top: 12px;
          padding-bottom: 12px;

          &:not(:last-child) {
            margin-right: 10px;
            margin-bottom: 0;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    .information .buttons {
      flex-direction: column;

      & > * {
        width: 100%;

        &:not(:last-child) {
          margin-right: 0;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
