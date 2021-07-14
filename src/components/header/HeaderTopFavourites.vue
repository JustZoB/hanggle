<template>
  <router-link to="/favourites" class="item">
    <div class="icon-wrap">
      <IconHeart :theme="'light'" :size="'m'" />
    </div>
    <p>Favourites</p>
  </router-link>
</template>

<script>
import IconHeart from '@/components/icons/IconHeart.vue'

export default {
  name: 'HeaderTopFavourites',
  components: {
    IconHeart
  }
}
</script>
