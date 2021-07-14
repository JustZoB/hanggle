<template>
  <router-link to="/changeLanguage" class="item">
    <div class="icon-wrap">
      <IconLanguage :theme="'light'" />
    </div>
    <p>Language</p>
  </router-link>
</template>

<script>
import IconLanguage from '@/components/icons/IconLanguage.vue'

export default {
  name: 'HeaderTopLanguage',
  components: {
    IconLanguage
  }
}
</script>
