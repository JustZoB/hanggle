<template>
  <router-link :to="item.href" class="item">
    <div class="image">
      <img :src="require(`@/assets/images/menu/${item.image}`)" :alt="item.name">
    </div>
    <span class="text-backgorund"></span>
    <p class="name fs-t">{{ item.name }}</p>
  </router-link>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;

  .image {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

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

  .name,
  .text-backgorund {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .text-backgorund {
    transform: translate(-50%, -50%) skewX(-15deg);
    background-color: $gray-greenish;
    width: 180px;
    height: 48px;
    z-index: 1;
  }

  .name {
    transform: translate(-50%, -50%);
    white-space: nowrap;
    line-height: 150%;
    z-index: 2;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .text-backgorund {
      width: 150px;
      height: 42px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .text-backgorund {
      width: 120px;
      height: 36px;
    }
  }
}
</style>
