<template>
  <div
    v-if="!isAdded"
    @click="toggleFavourites()"
    class="favourites"
    title="Add to favourites"
  >
    <IconHeart :theme="theme" :size="size" />
  </div>
  <div
    v-else
    @click="toggleFavourites()"
    class="favourites"
    title="Remove from favourites"
  >
    <IconHeart :fill="'fill'" :theme="theme" :size="size" />
  </div>
</template>

<script>
import store from '@/store/index'
import IconHeart from '@/components/icons/IconHeart.vue'

export default {
  name: 'FavouritesIconButton',
  components: {
    IconHeart
  },
  props: ['item', 'theme', 'size'],
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

<style lang="scss">
.favourites .icon {
  cursor: pointer;
}
</style>
