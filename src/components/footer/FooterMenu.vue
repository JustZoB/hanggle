<template>
  <div class="footer__menu">
    <FooterMenuColumn
      v-for="item in footerMenu"
      :key="item.title"
      :title="item.title"
      :links="item.links"
    />
  </div>
</template>

<script>
import footerMenu from '@/assets/json/footer-menu.json'
import FooterMenuColumn from '@/components/footer/FooterMenuColumn.vue'

export default {
  name: 'FooterMenu',
  components: {
    FooterMenuColumn
  },
  data () {
    return {
      footerMenu: footerMenu
    }
  }
}
</script>

<style lang="scss">
.footer__menu {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 60px;

  a {
    width: fit-content;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid $black;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    flex-wrap: wrap;
    margin-bottom: 0;

    & > * {
      width: 50%;
      margin-bottom: 20px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
  }
}
</style>
