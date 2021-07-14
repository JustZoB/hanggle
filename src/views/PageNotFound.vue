<template>
  <div class="pagenotfound page">
    <section class="section">
      <img
        :src="require(`@/assets/images/404.png`)"
        :alt="404"
        class="image"
      >
      <Button
        :theme="'dark'"
        :link="'/'"
      >
        Go to Homepage
      </Button>
    </section>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'PageNotFound',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.section {
  max-width: 480px;

  .image {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  @media (max-width: map-get($grid-breakpoints, 'md')) {
    padding: 0 15px;
  }
}
</style>
