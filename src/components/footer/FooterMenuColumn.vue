<template>
  <div class="footer__menu__item">
    <h3>{{ title }}</h3>
    <router-link
      v-for="item in links"
      :key="item.name"
      :to="item.href"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterMenuColumn',
  props: ['title', 'links']
}
</script>

<style lang="scss">
.footer__menu__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    font-size: map-get($font-size-medium, 'exl');
    line-height: 150%;
  }

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    a {
      font-size: map-get($font-size-medium, 'xl');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    a {
      font-size: map-get($font-size-medium, 'md');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    a {
      font-size: map-get($font-size-medium, 'sm');
    }
  }
}
</style>
