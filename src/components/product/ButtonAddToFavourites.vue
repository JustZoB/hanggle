<template>
  <Button
  v-if="!isAdded"
    @click="toggleFavourites()"
    :theme="theme"
  >
    <slot name="button">
      <IconHeart :theme="theme" :size="'m'" />
      <p>Add To Favourites</p>
    </slot>
  </Button>
  <Button
    v-else
    @click="toggleFavourites()"
    :theme="reverseTheme"
  >
    <slot name="button">
      <IconHeart :fill="'fill'" :theme="reverseTheme" :size="'m'" />
      <p>Added To Favourites</p>
    </slot>
  </Button>
</template>

<script>
import store from '@/store/index'
import Button from '@/components/Button.vue'
import IconHeart from '@/components/icons/IconHeart.vue'

export default {
  name: 'ButtonAddToFavourites',
  components: {
    Button,
    IconHeart
  },
  props: ['item', 'theme'],
  computed: {
    favouritesList: function () {
      return store.getters.favourites
    },
    isAdded: function () {
      if (this.favouritesList[this.item.id]) {
        return true
      } else {
        return false
      }
    },
    reverseTheme: function () {
      if (this.theme === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    }
  },
  methods: {
    toggleFavourites: function () {
      if (!this.isAdded) {
        store.dispatch('favouritesAdd', {
          item: this.item
        })
      } else {
        store.dispatch('favouritesRemove', {
          item: this.item
        })
      }
    }
  }
}
</script>
