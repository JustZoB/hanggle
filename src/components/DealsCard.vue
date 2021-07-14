<template>
  <div class="wrap">
    <router-link class="dealsCard" :to="`/deals/${item.link}`">
      <div class="dealsCard__image">
        <img :src="require(`@/assets/images/deals/${item.image}`)" :alt="'Under $' + item.link">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DealsCard',
  props: ['item']
}
</script>

<style lang="scss" scoped>
.dealsCard__image img {
  width: 100%;
}
</style>
