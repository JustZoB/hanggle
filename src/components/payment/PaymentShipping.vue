<template>
  <form>
    <div class="title fs-b">Shipping</div>
    <div class="row double">
      <input class="fs-m" type="text" placeholder="First name">
      <input class="fs-m" type="text" placeholder="Last name">
    </div>
    <div class="row long">
      <input class="country fs-m" type="text" placeholder="Country">
      <input class="city fs-m" type="text" placeholder="City">
      <div class="promptInput">
        <input class="street fs-m" type="text" placeholder="Street">
        <p class="prompt fs-m">E.g.St’ Pauls Rd</p>
      </div>
      <div class="promptInput">
        <input class="number fs-m" type="text" placeholder="Number">
        <p class="prompt fs-m">E.g.20</p>
      </div>
      <div class="promptInput">
        <input class="zipcode fs-m" type="text" placeholder="Zip Code" maxlength="6">
        <p class="prompt fs-m">E.g.022314</p>
      </div>
    </div>
    <div class="row double">
      <input class="fs-m" type="email" placeholder="E-mail Address">
      <input class="fs-m" type="text" placeholder="Phone No.">
    </div>

    <div class="radio">
      <input type="radio" name="shipping" value="eq" id="eq" checked>
      <label class="item fs-b" for="eq">Shipping Address = Billing Address</label>

      <input type="radio" name="shipping" value="dif" id="dif">
      <label class="item fs-b" for="dif">Different Billing Address</label>

      <input type="radio" name="shipping" value="ups" id="ups">
      <label class="item fs-b" for="ups">UPS Access Point</label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PaymentShipping'
}
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  height: fit-content;
  flex: 1;
  padding: 30px;
  box-shadow: 4px 4px 10px $gray-light;

  .title {
    line-height: 100%;
    margin-bottom: 30px;
  }

  .row {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 30px;
    }

    & > *:not(:last-child) {
      margin-right: 30px;
    }

    &.double {
      input {
        width: calc(50% - 60px);
      }
    }

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
      display: flex;
      flex-direction: column;

      .prompt {
        margin-top: 10px;
        line-height: 100%;
        color: $gray-dark;
      }
    }

    .zipcode,
    .number {
      width: 90px;
    }
  }

  .radio {
    display: flex;
    position: relative;

    input {
      position: absolute;
      visibility: hidden;

      &:checked + label {
        background-color: $gray-greenish;
        cursor: default;
      }
    }

    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      height: 100px;
      padding: 0 60px;
      border-width: 2px 1px;
      border-style: solid;
      border-color: $gray-greenish;
      color: $black;
      cursor: pointer;
      line-height: 130%;
      text-align: center;

      &.active {
        background-color: $gray-greenish;
        cursor: default;
      }

      &:nth-child(2) {
        border-width: 2px 1px 2px 2px;
      }

      &:last-child {
        border-width: 2px 2px 2px 1px;
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    padding: 20px;

    .row {
      input {
        padding: 15px 20px;
      }

      .promptInput {
        display: flex;
        flex-direction: column;
      }

      & > :not(:last-child) {
        margin-right: 20px;
      }

      &.double {
        input {
          width: calc(50% - 48px);
        }
      }

      &.long {
        flex-wrap: wrap;

        & > *:nth-child(1),
        & > *:nth-child(2) {
          width: calc(50% - 54px);
          margin-bottom: 20px;
        }

        & > *:nth-child(2) {
          margin-right: 0;
        }

        & > *:nth-child(3) {
          width: calc(60% - 14px);
        }

        & > *:nth-child(4),
        & > *:nth-child(5) {
          width: calc(20% - 14px);
        }

        .zipcode,
        .number {
          width: calc(100% - 40px);
        }
      }
    }

    .radio .item {
      padding: 0 20px;
      height: 75px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .radio .item {
      padding: 0 5px;
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .row {
      &:not(:last-child) {
        margin-bottom: 20px;
      }

      & > *:not(:last-child) {
        margin-right: 0;
        margin-bottom: 10px;
      }

      input {
        padding: 12px 18px;
      }

      &.double {
        flex-direction: column;

        input {
          width: calc(100% - 38px);
        }
      }

      &.long {
        flex-wrap: wrap;

        & > *:nth-child(1),
        & > *:nth-child(2) {
          width: calc(100% - 38px);
          margin-bottom: 10px;
        }

        & > *:nth-child(2) {
          margin-right: 0;
        }

        & > *:nth-child(3) {
          width: 100%;
        }

        & > *:nth-child(4) {
          margin-right: 20px;
          margin-bottom: 0;
        }

        & > *:nth-child(4),
        & > *:nth-child(5) {
          width: calc(50% - 10px);
        }

        .zipcode,
        .number {
          width: calc(100% - 38px);
        }
      }
    }

    .radio {
      flex-direction: column;

      .item {
        width: 100%;
        border-width: 1px 2px;

        &:nth-child(2) {
          border-width: 2px 2px 1px 2px;
        }

        &:last-child {
          border-width: 1px 2px 2px 2px;
        }
      }
    }
  }
}
</style>
