<template>
  <router-link :to="`/${gender}/${category}`" class="item">
    <h3 class="title">{{ gender }}</h3>
    <div class="image">
      <img :src="require(`@/assets/images/genders/${gender}.png`)">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'GenderCard',
  props: ['gender', 'category']
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 100%;
  height: 200px;
  box-shadow: 7px 7px 18px $gray-light;

  .title {
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
    font-size: 50px;
    line-height: 100%;
    text-transform: capitalize;
    z-index: 1;
  }

  .image {
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: cover;
      flex: 1;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .image {
      width: 72%;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .title {
      font-size: 30px;
      left: 20px;
    }

    .image {
      width: 96%;

      img {
        left: 65%;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    height: 130px;

    .title {
      font-size: 40px;
      left: 30px;
    }

    .image {
      width: 55%;

      img {
        left: 50%;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .title {
      font-size: 30px;
      left: 20px;
    }

    .image {
      width: 100%;

      img {
        left: 65%;
      }
    }
  }
}
</style>
