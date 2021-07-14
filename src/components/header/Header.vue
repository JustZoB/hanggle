<template>
  <header class="header">
    <HeaderTop />
    <HeaderNavbar />
  </header>
</template>

<script>
import HeaderTop from '@/components/header/HeaderTop.vue'
import HeaderNavbar from '@/components/header/HeaderNavbar.vue'

export default {
  name: 'Home',
  components: {
    HeaderTop,
    HeaderNavbar
  }
}
</script>

<style lang="scss">
.header {
  width: 100%;

  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: map-get($grid-breakpoints-content, 'exl');
    height: 100%;
    margin: 0 20px;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .wrap {
      width: map-get($grid-breakpoints-content, 'xl');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .wrap {
      width: map-get($grid-breakpoints-content, 'lg');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    position: fixed;
    z-index: 9;

    &__top .wrap {
      padding: 0 15px;
    }

    .wrap {
      width: map-get($grid-breakpoints-content, 'md');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    &__top .wrap {
      padding: 0;
    }

    .wrap {
      width: map-get($grid-breakpoints-content, 'sm');
    }
  }
}
</style>
