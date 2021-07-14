<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view :key="'a' + $route.params.id" />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import store from '@/store/index'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created () {
    window.addEventListener('resize', this.resize)
    this.resize()
    store.dispatch('cartSetFromLocalStorage')
    store.dispatch('favouritesSetFromLocalStorage')
    store.dispatch('viewedSetFromLocalStorage')
  },
  destroyed () {
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      store.dispatch('isMobile', {
        width: document.documentElement.clientWidth
      })
    },
    burgerModal: function (isOpen) {
      store.dispatch('burgerModal', {
        isOpen: isOpen
      })
    },
    filtersModal: function (isOpen) {
      store.dispatch('filtersModal', {
        isOpen: isOpen
      })
    },
    navbarMenuModal: function (isOpen) {
      store.dispatch('navbarMenuModal', {
        isOpen: isOpen
      })
    }
  },
  watch: {
    $route (to, from) {
      this.burgerModal(false)
      this.filtersModal(false)
      this.navbarMenuModal(false)
    }
  }
}
</script>

<style lang="scss">
@import './assets/reset.css';

#app {
  font-family: $font-family-body;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
  background-color: $white;
}

.modal-open {
  overflow: hidden;
}

.fast_fade-enter-active,
.fast_fade-leave-active,
.fade-enter-active,
.fade-leave-active,
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition-timing-function: ease;
}

.fade-enter-active,
.fade-leave-active,
.fast_fade-enter-active,
.fast_fade-leave-active {
  transition-property: opacity;
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition-property: height, opacity;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active,
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition-duration: 0.3s;
}

.fast_fade-enter-active,
.fast_fade-leave-active {
  transition-duration: 0.15s;
}

.fade-enter,
.fade-leave-active,
.fast_fade-enter,
.fast_fade-leave-active,
.fadeHeight-enter,
.fadeHeight-leave-active {
  opacity: 0;
}

button,
input,
select {
  font-family: $font-family-body;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-family-headers;
  font-weight: 400;
}

h1, h2 {
  margin-bottom: 30px;
}

.fs-t {
  font-size: map-get($font-size-title, 'exl');
  line-height: 130%;

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    font-size: map-get($font-size-title, 'xl');
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    font-size: map-get($font-size-title, 'lg');
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    font-size: map-get($font-size-title, 'md');
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    font-size: map-get($font-size-title, 'sm');
  }
}

.fs-b {
  font-size: map-get($font-size-big, 'exl');

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    font-size: map-get($font-size-big, 'xl');
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    font-size: map-get($font-size-big, 'lg');
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    font-size: map-get($font-size-big, 'md');
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    font-size: map-get($font-size-big, 'sm');
  }
}

.fs-m {
  font-size: map-get($font-size-medium, 'exl');

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    font-size: map-get($font-size-medium, 'xl');
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    font-size: map-get($font-size-medium, 'lg');
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    font-size: map-get($font-size-medium, 'md');
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    font-size: map-get($font-size-medium, 'sm');
  }
}

a {
  text-decoration: none;
  color: $black;

  &:link,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    color: $black;
  }
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: map-get($grid-breakpoints-content, 'exl');

    @media (max-width: map-get($grid-breakpoints, 'xl')) {
      width: map-get($grid-breakpoints-content, 'xl');
    }
    @media (max-width: map-get($grid-breakpoints, 'lg')) {
      width: map-get($grid-breakpoints-content, 'lg');
    }
    @media (max-width: map-get($grid-breakpoints, 'md')) {
      width: map-get($grid-breakpoints-content, 'md');
    }
    @media (max-width: map-get($grid-breakpoints, 'sm')) {
      width: map-get($grid-breakpoints-content, 'sm');
    }
  }

  & > .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;

    .filtersButton {
      cursor: pointer;
    }
  }

  & > .title {
    margin-top: 30px;
  }

  & > .section {
    margin-top: 30px;

    & > .section:not(:first-child) {
      margin-top: 30px;
    }

    & > .section.product-block {
      margin-top: 0;
    }
  }

  &.product > .section {
    margin-top: 60px;
  }

  .aside {
    width: calc(25% - 10px);
    margin-right: 20px;
    height: fit-content;
    padding: 20px;
    box-shadow: 4px 4px 10px $gray-light;

    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  }

  .product-block {
    width: calc(75% - 10px);
    margin-top: 0;
  }

  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .aside {
      width: calc(33% - 10px);
    }

    .product-block {
      width: calc(66% - 10px);
    }

    &.cart,
    &.payment {
      & > .section > .block {
        flex-direction: column;

        & > .items,
        & > .block__main {
          margin-right: 0;
          margin-top: 20px;
        }

        & > .order-summary {
          width: 100%;
          order: -1;
        }
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding-top: 70px;

    &.product > .section {
      margin-top: 30px;
    }

    .aside {
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 50px 20px 20px 20px;
      box-shadow: none;
      z-index: 100;
      background-color: $white;
      overflow: auto;

      & > *:not(:last-child) {
        margin-bottom: 30px;
      }

      .close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        cursor: pointer;

        &::before,
        &::after {
          content: '';
          position: absolute;
          display: block;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 1px;
          background-color: $black;
        }

        &::before {
          transform: translate(-50%, -50%) rotate(-45deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }

    .product-block {
      width: 100%;
    }

    & > .section > .title,
    & > .section > .items,
    & > .head,
    & > .section > .section,
    & > .section.item {
      padding: 0 15px;
    }

    & > .section > .section {
      padding: 0 10px;

      .items {
        padding: 0;
      }
    }
  }
}

.section {
  display: flex;
  flex-direction: column;

  &.row {
    flex-direction: row;
  }

  & > .title {
    margin-bottom: 30px;
  }

  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    margin-top: 50px;
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    margin-top: 40px;

    & > .title {
      margin-bottom: 10px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    margin-top: 30px;
  }
}

.page,
.section {
  & > .head > .title,
  & > .title {
    display: flex;
    align-items: center;

    h1 {
      text-transform: capitalize;
      margin-bottom: 0;
    }

    .amount {
      font-size: map-get($font-size-title, 'exl');
      line-height: 100%;
      color: $gray-dark;
      margin-left: 20px;

      @media (max-width: map-get($grid-breakpoints, 'xl')) {
        font-size: map-get($font-size-title, 'xl');
      }
      @media (max-width: map-get($grid-breakpoints, 'lg')) {
        font-size: map-get($font-size-title, 'lg');
        margin-left: 15px;
      }
      @media (max-width: map-get($grid-breakpoints, 'md')) {
        font-size: map-get($font-size-title, 'md');
      }
      @media (max-width: map-get($grid-breakpoints, 'sm')) {
        font-size: map-get($font-size-title, 'sm');
        margin-left: 10px;
      }
    }
  }
}

.icon {
  &.light {
    &.fill {
      path:not(.without-fill) {
        fill: $black;
      }
    }

    path {
      stroke: $black;
    }
  }

  &.dark {
    &.fill {
      path:not(.without-fill) {
        fill: $white;
      }
    }

    path {
      stroke: $white;
    }
  }
}
</style>
