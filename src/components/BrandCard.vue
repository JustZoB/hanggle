<template>
  <div class="wrap">
    <router-link class="brandCard" :to="`/brands/${item.link}`" :title="item.name">
      <img
        v-if="item.image"
        class="brandCard__image"
        :src="require(`@/assets/images/brands/${item.image}`)"
        :alt="item.name"
      >
      <img
        v-else
        class="brandCard__image"
        :src="require('@/assets/images/noImage.jpg')"
        alt="No image"
      >
      <p class="brandCard__name fs-b">{{ item.name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BrandCard',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.brandCard {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: $white;
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

  &__image {
    position: absolute;
    width: 100%;
    height: calc(100% - 60px);
  }

  &__name {
    padding: 20px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 100%;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    &__image {
      height: calc(100% - 54px);
    }

    &__name {
      padding: 15px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    &__image {
      height: calc(100% - 46px);
    }

    &__name {
      padding: 12px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    &__image {
      height: calc(100% - 38px);
    }

    &__name {
      padding: 10px;
      font-size: 18px;
    }

    &:hover,
    &:focus {
      transform: translate(0, 0);
      box-shadow: 0 0 0 $gray-greenish;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    &__image {
      height: calc(100% - 30px);
    }

    &__name {
      padding: 8px;
      font-size: 14px;
    }
  }
}
</style>
