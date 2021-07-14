<template>
  <div class="header__top">
    <div class="wrap">
      <transition  name="fade" mode="out-in">
        <div v-if="!isMobile || isMobile && isBurgerMenuOpen" class="header__top__links">
          <HeaderTopLanguage @click="burgerModal(false)" />
          <HeaderTopFavourites @click="burgerModal(false)" />
          <HeaderTopCart @click="burgerModal(false)" />
          <HeaderTopProfile @click="burgerModal(false)" />
          <HeaderTopProducts v-if="isMobile" />
        </div>
      </transition>
      <router-link to="/" @click="burgerModal(false)">
        <img src="@/assets/images/logo.png" alt="Hanggle logo">
      </router-link>
      <Search v-if="!isMobile" />
      <div class="icons" v-if="isMobile">
        <IconSearch :size="'m'" class="search-button" />
        <div
          @click="burgerModal()"
          :class="{ burger__close: isBurgerMenuOpen }"
          class="burger"
        >
          <span class="burger__top"></span>
          <span class="burger__center"></span>
          <span class="burger__bottom"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'
import HeaderTopLanguage from '@/components/header/HeaderTopLanguage.vue'
import HeaderTopFavourites from '@/components/header/HeaderTopFavourites.vue'
import HeaderTopCart from '@/components/header/HeaderTopCart.vue'
import HeaderTopProfile from '@/components/header/HeaderTopProfile.vue'
import HeaderTopProducts from '@/components/header/HeaderTopProducts.vue'
import Search from '@/components/Search.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

export default {
  name: 'HeaderTop',
  components: {
    HeaderTopLanguage,
    HeaderTopFavourites,
    HeaderTopCart,
    HeaderTopProfile,
    HeaderTopProducts,
    Search,
    IconSearch
  },
  computed: {
    isMobile: function () {
      return store.getters.isMobile
    },
    isBurgerMenuOpen: function () {
      return store.getters.isBurgerMenuOpen
    }
  },
  methods: {
    burgerModal: function (isOpen) {
      store.dispatch('burgerModal', {
        isOpen: isOpen
      })
    }
  }
}
</script>

<style lang="scss">
.header__top {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90px;
  background-color: $gray-greenish;

  &__links {
    display: flex;

    & > .item,
    & > .cart-wrap > .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      &:not(:last-child) {
        margin-right: 40px;
      }

      .icon-wrap {
        position: relative;
        display: flex;
        margin-bottom: 5px;
      }

      p {
        font-size: 16px;
        line-height: 100%;
      }
    }
  }

  .search {
    min-width: 420px;
    font-size: 16px;
    line-height: 100%;

    &::placeholder {
      color: $black;
      opacity: 1;
    }
  }

  .icons {
    display: none;

    .search-button {
      cursor: pointer;
    }

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }

  .burger {
    position: relative;
    display: block;
    width: 30px;
    height: 23px;
    cursor: pointer;

    &__top,
    &__center,
    &__bottom {
      content: '';
      position: absolute;
      left: 0;
      width: 32px;
      height: 1px;
      background-color: $black;
      transition: 0.3s;
    }

    &__center {
      top: 11px;
    }

    &__top {
      transform-origin: right top;
      top: 0;
    }

    &__bottom  {
      transform-origin: right bottom;
      bottom: 0;
    }
  }

  .burger__close {
    .burger__top {
      transform: rotate(-45deg);
    }

    .burger__center {
      width: 0;
    }

    .burger__bottom {
      transform: rotate(45deg);
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    &__links {
      & > .item,
      & > .cart-wrap > .item {
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }

    .search {
      min-width: 320px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    height: 70px;

    .search {
      display: none;
    }

    .header__top__links {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      top: 70px;
      left: 0;
      width: 100%;
      height: 100%;
      padding-bottom: 70px;
      z-index: 100;
      background-color: $white;
      overflow: auto;

      .cart-wrap {
        width: 100%;
      }

      & > .item,
      .cart-wrap > .item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: 100%;
        padding: 18px 15px;
        border-bottom: 1px solid $gray-greenish;
        height: unset;

        &:not(:last-child) {
          margin-right: 0;
        }

        .icon-wrap {
          margin-bottom: 0;
          margin-right: 15px;
        }
      }
    }

    .icons {
      display: flex;
    }
  }
}
</style>
