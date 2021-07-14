<template>
  <form>
    <div class="title fs-b">Payment</div>

    <div class="block">
      <div class="credit-card">
        <div class="title">
          <p class="fs-b">Credit Card</p>
          <img src="@/assets/images/visa-mc-ad.png" alt="Visa, Mastercard and American express">
        </div>
        <div class="content">
          <div class="row">
            <div class="promptInput number">
              <p class="prompt fs-m">Card No.</p>
              <input
                class="fs-m"
                type="text"
                maxlength="19"
                placeholder="8877 6655 4433 2211"
              >
            </div>
            <div class="promptInput date">
              <p class="prompt fs-m">Exp.Date</p>
              <input
                class="fs-m"
                type="text"
                maxlength="5"
                placeholder="MM/YY"
              >
            </div>
            <div class="promptInput cvc">
              <p class="prompt fs-m">CVV/CVC</p>
              <div class="input">
                <input
                  class="fs-m"
                  type="text"
                  maxlength="3"
                  placeholder="***"
                >
                <div class="question">?</div>
              </div>
            </div>
          </div>
          <Button
            class="button"
            :theme="'dark'"
            :link="'/'"
          >
            Continue To Overview
          </Button>
        </div>
      </div>

      <div class="paypal">
        <div class="title">
          <img src="@/assets/images/cart-title-paypal.png" alt="PayPal">
        </div>
        <div class="content">
          <img src="@/assets/images/cart-paypal.png" alt="PayPal">
          <Button
            class="button"
            :theme="'dark'"
            :link="'/'"
          >
            PayPal Checkout
          </Button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'PaymentPayment',
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  height: fit-content;
  flex: 1;
  padding: 30px;
  box-shadow: 4px 4px 10px $gray-light;

  & > .title {
    line-height: 100%;
    margin-bottom: 30px;
  }

  .block {
    display: flex;

    & > * {
      width: 50%;
      border-left: 1px solid $gray-greenish;
      border-right: 1px solid $gray-greenish;

      &:first-child {
        border-left: 0;

        .content {
          padding-right: 30px;
        }
      }

      &:last-child {
        border-right: 0;

        .content {
          padding-left: 30px;

          img {
            width: 100%;
            margin-bottom: 50px;
          }
        }
      }

      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100px;
        border-bottom: 1px solid $gray-greenish;

        & > p {
          margin-right: 10px;
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        padding-top: 60px;
        border-top: 1px solid $gray-greenish;
      }
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 61px;

    input {
      height: fit-content;
      padding: 20px 28px;
      border: 1px solid $black;
      border-radius: 35px;
      line-height: 100%;

      &::placeholder {
        color: $gray-dark;
      }
    }

    .promptInput {
      position: relative;
      display: flex;
      flex-direction: column;

      &.number {
        width: 100%;
        margin-bottom: 42px;
      }

      &.date {
        width: calc(50% - 10px);
        margin-right: 20px;
      }

      &.cvc {
        width: calc(50% - 10px);

        .input {
          position: relative;

          input {
            padding-right: 62px;
            width: calc(100% - 90px);
          }

          .question {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: $gray-greenish;
            color: $white;
            cursor: pointer;
          }
        }
      }

      .prompt {
        position: absolute;
        top: -28px;
        left: 0;
        line-height: 100%;
        color: $gray-dark;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    padding: 20px;

    .row {
      margin-bottom: 26px;

      input {
        padding: 15px 20px;
      }

      .promptInput {
        display: flex;
        flex-direction: column;

        &.cvc .input input {
          padding-right: 50px;
          width: calc(100% - 72px);
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    .row {
      margin-bottom: 24px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .block > *:last-child .content img {
      margin-bottom: 91px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .block {
      flex-direction: column;

      & > * {
        width: 100%;
        border-left: 0;
        border-right: 0;

        &:first-child {
          margin-bottom: 30px;

          .content {
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        &:last-child {
          .content {
            padding-left: 10px;
            padding-right: 10px;

            img {
              margin-bottom: 20px;
            }
          }
        }

        .title {
          height: 60px;
        }

        .content {
          padding-top: 40px;
        }
      }
    }

    .row {
      margin-bottom: 20px;

      input {
        padding: 12px 18px;
      }

      .promptInput {
        &.number {
          width: 100%;
          margin-bottom: 30px;
        }

        .prompt {
          top: -20px;
        }
      }
    }
  }
}
</style>
