<template>
  <div class="search">
    <input type="text" placeholder="Search" />
    <IconSearch :size="'s'" />
  </div>
</template>

<script>
import IconSearch from '@/components/icons/IconSearch.vue'
export default {
  name: 'Search',
  components: {
    IconSearch
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  input {
    width: calc(100% - 67px);
    background-color: unset;
    border: 1px solid $black;
    padding: 0 45px 0 20px;
    height: 38px;
    border-radius: 20px;
  }

  .icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
