<template>
  <footer class="footer">
    <div class="footer__wrap">
      <FooterMenu />
      <FooterBottom />
    </div>
  </footer>
</template>

<script>
import FooterMenu from '@/components/footer/FooterMenu.vue'
import FooterBottom from '@/components/footer/FooterBottom.vue'

export default {
  name: 'HeaderTop',
  components: {
    FooterMenu,
    FooterBottom
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  margin-top: 100px;
  width: 100%;
  background-color: $gray-greenish;

  h3 {
    font-size: map-get($font-size-medium, 'exl');
    line-height: 130%;
    text-transform: uppercase;
  }

  &__wrap {
    width: 1320px;
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    margin-top: 80px;

    &__wrap {
      width: map-get($grid-breakpoints-content, 'xl');
    }

    h3 {
      font-size: map-get($font-size-medium, 'xl');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    margin-top: 70px;

    &__wrap {
      width: map-get($grid-breakpoints-content, 'lg');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    margin-top: 60px;

    &__wrap {
      width: map-get($grid-breakpoints-content, 'md');
    }

    h3 {
      font-size: map-get($font-size-medium, 'md');
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    margin-top: 50px;

    &__wrap {
      width: map-get($grid-breakpoints-content, 'sm');
    }

    h3 {
      font-size: map-get($font-size-medium, 'sm');
    }
  }
}
</style>
