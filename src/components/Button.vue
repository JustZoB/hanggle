<template>
  <router-link
    v-if="link"
    class="button fs-m"
    :class="theme"
    :to="link"
  >
    <slot></slot>
  </router-link>

  <button
    v-else
    class="button fs-m"
    @click="$emit('click')"
    :class="theme"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['link', 'theme']
}
</script>

<style lang="scss">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid $black;
  border-radius: 35px;
  text-align: center;
  line-height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translate(-7px, -7px);
    box-shadow: 7px 7px 0 $gray-greenish;
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0 0 0 $gray-greenish;
  }

  .icon {
    margin-right: 10px;
  }

  &.light {
    background-color: transparent;
    color: $black;
  }

  &.dark {
    background-color: $black;
    color: $white;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding-top: 14px;
    padding-bottom: 14px;

    &:hover {
      transform: translate(0, 0);
      box-shadow: 0 0 0 $gray-greenish;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>
