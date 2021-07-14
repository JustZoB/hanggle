<template>
  <div class="subscribe">
    <img class="background" :src="require(`@/assets/images/background.png`)">
    <div class="block">
      <h3 class="title">Up to 50% off</h3>
      <p class="text">Register for the newsletter and save on your first order</p>
      <input class="fs-m" type="text" placeholder="Your E-mail address" />
      <div class="row">
        <Button class="button" :theme="'dark'">
          Subscribe Now
        </Button>
        <p class="accept fs-m">I accept the data privacy policy and Subscribing Terms</p>
      </div>
    </div>

  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Subscribe',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.subscribe {
  position: relative;
  height: 100%;
  margin-right: 10px;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .block {
    position: absolute;
    top: 0;
    left: 50%;
    width: 72.5%;
    height: 100%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 100px;
      line-height: 130%;
    }

    .text {
      font-size: 44px;
      line-height: 150%;
      margin-bottom: 40px;
    }

    input {
      width: calc(100% - 44px);
      background-color: unset;
      border: 1px solid $black;
      padding: 0 20px;
      height: 60px;
      border-radius: 35px;
      margin-bottom: 35px;
    }

    .row {
      display: flex;
      align-items: center;

      .button {
        margin-right: 20px;
      }

      & > * {
        width: calc(50% - 10px);
      }

      .accept {
        line-height: 150%;
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .block {
      width: 78%;

      .title {
        font-size: 76px;
      }

      .text {
        font-size: 32px;
        margin-bottom: 25px;
      }

      input {
        height: 60px;
        margin-bottom: 25px;
        font-size: 18px;
      }

      .row {
        .button {
          font-size: 18px;
          padding-bottom: 15px;
          padding-top: 15px;
        }

        .accept {
          font-size: 15px;
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .block {
      width: 86%;

      .title {
        font-size: 64px;
      }

      .text {
        font-size: 26px;
        margin-bottom: 15px;
      }

      input {
        height: 50px;
        margin-bottom: 15px;
        font-size: 16px;
      }

      .row {
        .button {
          font-size: 16px;
          padding-bottom: 12px;
          padding-top: 12px;
        }

        .accept {
          font-size: 12px;
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    height: 270px;

    .block {
      width: 300px;

      .title {
        font-size: 46px;
      }

      .text {
        font-size: 20px;
        margin-bottom: 10px;
      }

      input {
        width: calc(100% - 34px);
        height: 29px;
        padding: 0 15px;
        margin-bottom: 10px;
        font-size: 12px;
      }

      .row {
        .button {
          font-size: 12px;
          padding-bottom: 10px;
          padding-top: 10px;
          margin-right: 10px;
        }

        .accept {
          font-size: 10px;
        }
      }
    }
  }
}
</style>
