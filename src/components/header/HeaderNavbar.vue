<template>
  <div v-if="!isMobile || isMobile && isBurgerMenuOpen && isNavbarOpen" class="header__navbar">
    <div class="wrap">
      <div
        v-if="isMobile && isBurgerMenuOpen && isNavbarOpen"
        @click="navbarMenuModal(false)"
        class="back fs-b"
      >
        Back
      </div>
      <router-link
        v-for="item in links"
        :key="item.name"
        :to="`${item.href}`"
        class="item"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import links from '@/assets/json/menu.json'

export default {
  name: 'HeaderNavbar',
  data () {
    return {
      links: links
    }
  },
  computed: {
    isMobile: function () {
      return store.getters.isMobile
    },
    isBurgerMenuOpen: function () {
      return store.getters.isBurgerMenuOpen
    },
    isNavbarOpen: function () {
      return store.getters.isNavbarOpen
    }
  },
  methods: {
    navbarMenuModal: function (isOpen) {
      store.dispatch('navbarMenuModal', {
        isOpen: isOpen
      })
    }
  }
}
</script>

<style lang="scss">
.header .header__navbar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  border-top: 1px solid $gray-dark;
  background-color: $gray-greenish;

  a {
    width: fit-content;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus,
    &:active {
      border-bottom: 1px solid $black;
    }
  }

  .item {
    font-size: map-get($font-size-medium, 'exl');
    line-height: 100%;
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    & > .wrap {
      position: fixed;
      top: 70px;
      left: 0;
      width: 100%;
      height: 100%;
      padding-bottom: 70px;
      background-color: $white;
      border-top: 0;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0;
      z-index: 101;
      overflow: auto;

      & > * {
        display: flex;
        align-items: center;
        min-height: 60px;
        width: 100%;
        padding-left: 20px;
        margin-bottom: 1px;
        font-size: 16px;
      }

      .back {
        position: relative;
        padding-left: 44px;
        cursor: pointer;

        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 20px;
          top: 50%;
          width: 10px;
          height: 1px;
          background-color: $black;
        }

        &::before {
          transform-origin: left top;
          transform: translateY(-50%) rotate(50deg);
        }

        &::after {
          transform-origin: left bottom;
          transform: translateY(-50%) rotate(-50deg);
        }
      }

      a {
        background-color: $gray-greenish;
        border-bottom: 0;

        &:hover,
        &:focus,
        &:active {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>
