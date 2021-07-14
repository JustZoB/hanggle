<template>
  <router-link :to="link" class="banner">
    <img :src="require(`@/assets/images/banners/${image}`)" :alt="name">
  </router-link>
</template>

<script>
export default {
  name: 'Banner',
  props: ['name', 'image', 'link']
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  margin-top: 60px;

  img {
    width: 100%;
  }

  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    margin-top: 50px;
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    margin-top: 40px;
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    margin-top: 30px;
  }
}
</style>
