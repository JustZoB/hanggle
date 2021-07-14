<template>
  <router-link to="/profile" class="item">
    <div class="icon-wrap">
      <IconProfile :theme="'light'" />
    </div>
    <p>Profile</p>
  </router-link>
</template>

<script>
import IconProfile from '@/components/icons/IconProfile.vue'

export default {
  name: 'HeaderTopProfile',
  components: {
    IconProfile
  }
}
</script>
