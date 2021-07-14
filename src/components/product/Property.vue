<template>
  <div v-if="!(!value && otherValue === 'hide')" class="property">
    <p class="property__name">{{ name }}</p>
    <p v-if="value" class="property__data">
      <span v-if="currency">{{ currency }}</span>{{ value }}
    </p>
    <p v-else class="property__data">{{ otherValue }}</p>
  </div>
</template>

<script>
export default {
  name: 'Property',
  props: ['name', 'value', 'currency', 'otherValue']
}
</script>

<style lang="scss" scoped>
.property {
  display: flex;

  &__name {
    text-transform: capitalize;
    color: $gray-dark;
    margin-right: 20px;
  }

  &__data {
    color: $black;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    &__name {
      margin-right: 10px;
    }
  }
}
</style>
