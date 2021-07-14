<template>
  <router-link class="productCard" :to="`/item/${item.id}`" :title="item.name">
    <div v-if="item.sale" class="productCard__sale">
      <p>Sale -{{ item.sale }}%</p>
    </div>
    <img
      v-if="item.images && item.images[0]"
      class="productCard__image"
      :src="require(`@/assets/images/products/${item.images[0]}`)"
      :alt="item.name"
    >
    <img
      v-else
      class="productCard__image"
      :src="require('@/assets/images/noImage.jpg')"
      alt="No image"
    >
    <div class="productCard__title">
      <p class="productCard__title__name fs-b">{{ item.name }}</p>
      <p class="productCard__title__price fs-b">{{ price }}$</p>
    </div>
    <p v-if="item.size && item.size !== 'One Size'" class="productCard__size">Size: {{ item.size }}</p>
    <p v-else class="productCard__size">One Size</p>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['item'],
  computed: {
    price: function () {
      let price = this.item.price

      if (this.item.sale) {
        price = this.item.price - this.item.price * this.item.sale / 100
      }

      return price
    }
  }
}
</script>

<style lang="scss" scoped>
.productCard {
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 7px 7px 18px $gray-light;
  cursor: pointer;
  transition: 0.3s;

  &::before {
    content: "";
    display: block;
    margin-top: 90%;
  }

  &:hover,
  &:focus {
    transform: translate(-7px, -7px);
    box-shadow: 7px 7px 0 $gray-greenish;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 0 0 $gray-greenish;
  }

  & > *:last-child {
    padding-bottom: 15px;
  }

  &__image {
    position: absolute;
    width: 100%;
    height: calc(100% - 86px);
    object-fit: cover;
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 0 20px;
    background-color: $white;

    &__name {
      max-width: 300px;
      overflow-x: hidden;
      white-space: nowrap;
      margin-right: 20px;
      text-overflow: ellipsis;
    }
  }

  &__size {
    font-size: 24px;
    line-height: 100%;
    padding: 12px 20px 0 20px;
    color: $gray-dark;
    background-color: $white;
  }

  &__sale {
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: $white;
    z-index: 1;

    p {
      font-size: 24px;
      line-height: 100%;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    &__size,
    &__sale p {
      font-size: 20px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    &__image {
      height: calc(100% - 80px);
    }

    & > *:last-child {
      padding-bottom: 12px;
    }

    &__title {
      padding: 12px 12px 0 12px;

      p {
        font-size: map-get($font-size-big, 'lg');
      }
    }

    &__size {
      padding: 12px 12px 0 12px;
    }

    &__size,
    &__sale p {
      font-size: map-get($font-size-big, 'lg');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    &__image {
      height: calc(100% - 62px);
    }

    & > *:last-child {
      padding-bottom: 10px;
    }

    &__title {
      padding: 10px 10px 0 10px;

      p {
        font-size: 16px;
      }
    }

    &__size {
      padding: 10px 10px 0 10px;
    }

    &__size,
    &__sale p {
      font-size: 16px;
    }

    &:hover,
    &:focus {
      transform: translate(0, 0);
      box-shadow: 0 0 0 $gray-greenish;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    &__image {
      height: calc(100% - 52px);
    }

    & > *:last-child {
      padding-bottom: 8px;
    }

    &__title {
      padding: 8px 8px 0 8px;

      p {
        font-size: 14px;
      }
    }

    &__size {
      padding: 8px 8px 0 8px;
    }

    &__size,
    &__sale p {
      font-size: 14px;
    }
  }
}
</style>
