<template>
  <div class="about-more">
    <div class="about-more__headers fs-b">
      <div
        @click="showDetails()"
        :class="{ active: isDetailsShown }"
        class="details"
      >
        Details
      </div>
      <div
        @click="showDescription()"
        :class="{ active: isDescriptionShown }"
        class="description"
      >
        Description
      </div>
      <div
        @click="showShipping()"
        :class="{ active: isShippingShown }"
        class="shipping"
      >
        Shipping
      </div>
    </div>
    <div class="about-more__content">
      <transition
        name="fadeHeight"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div v-if="isDetailsShown" class="details fs-b" :key="0">
          <div class="column">
            <Property :name="'Item no.'" :value="item.id" />
            <Property :name="'Color'" :value="item.color" />
            <Property :name="'Size'" :value="item.size" :otherValue="'One size'" />
            <Property :name="'Condition'" :value="item.condition" />
            <Property :name="'Material'" :value="'100% Cotton'" />
            <Property :name="'Season'" :value="'All Seasons'" />
          </div>
          <div class="column">
            <Property :name="'Arm Length'" :value="'60.0 cm'" />
            <Property :name="'Length'" :value="'61.0 cm'" />
            <Property :name="'Shoulder Width'" :value="'39.0 cm'" />
            <Property :name="'Chest Width'" :value="'44.0 cm'" />
          </div>
        </div>
        <div v-if="isDescriptionShown" class="description fs-m" :key="1">
          <p>{{ descriprion }}</p>
          <ul>
            <li>Perfect tailoring and printing quality</li>
            <li>Expedited shipping</li>
            <li>Cotton with polyester addition 50 / 50%</li>
            <li>After washing does not shrink and does not stretch</li>
            <li>Increased resistance to wear</li>
            <li>Eternal durability and brightness of the image. (guarantee 50 washings) *</li>
          </ul>
        </div>
        <div v-if="isShippingShown" class="shipping fs-m" :key="2">
          <Property :name="'Shipping'" :value="shipping" :otherValue="'Free'" />
          <Property :name="'Returns'" :value="returns" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Property from '@/components/product/Property.vue'

export default {
  name: 'ProductAboutMore',
  props: ['item'],
  components: {
    Property
  },
  data () {
    return {
      isDetailsShown: true,
      isDescriptionShown: false,
      isShippingShown: false,
      descriprion: 'A classic T-shirt with a short sleeve and a round collar, trimmed with a knitted elastic band. Polyester + cotton high density. Durable dyeing guarantees resistance to washing, fading and loss of shape. Quality material provides a comfortable toe and does not cause allergic reactions.',
      shipping: 'Shipped in 1 to 3 workdays Quality and authenticity of the item have been verified. The item is currently in our warehouse and ready for shipping. It will usually be shipped within 1-3 workdays.',
      returns: 'Resell the item for free This item is offered by a private seller, therefore you do not have the right to return it. To minimise your risk of a bad purchase, however, we offer the option that you re-sell the item easily within 7 days. Just visit your user profile in "Orders" and click "Re-sell item". The item will then be put back on sale.'
    }
  },
  methods: {
    showDetails: function () {
      this.isDetailsShown = true
      this.isDescriptionShown = false
      this.isShippingShown = false
    },
    showDescription: function () {
      this.isDetailsShown = false
      this.isDescriptionShown = true
      this.isShippingShown = false
    },
    showShipping: function () {
      this.isDetailsShown = false
      this.isDescriptionShown = false
      this.isShippingShown = true
    },
    beforeLeave (element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter (element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    }
  }
}
</script>

<style lang="scss">
.about-more {
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  &__headers {
    display: flex;
    width: 100%;
    margin-bottom: 40px;

    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.3333%;
      height: 60px;
      border-bottom: 1px solid $gray-greenish;
      color: $black;
      line-height: 100%;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: $gray-greenish_opacity_20;
      }

      &.active {
        background-color: $gray-greenish;
        cursor: default;

        &:hover,
        &:focus {
          background-color: $gray-greenish;
        }
      }
    }
  }

  &__content {
    .details {
      display: flex;
      line-height: 100%;

      .column {
        display: flex;
        flex-direction: column;

        &:not(:last-child) {
          margin-right: 90px;
        }

        &:first-child {
          .property__name {
            min-width: 130px;
          }
        }

        &:last-child {
          .property__name {
            min-width: 190px;
          }
        }

        & > *:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }

    .description {
      ul {
        margin-top: 10px;
        list-style: disc;
        padding-left: 20px;
      }
    }

    .description,
    .shipping {
      line-height: 150%;
    }

    .shipping {
      & > *:not(:last-child) {
        margin-bottom: 20px;
      }

      .property__name {
        min-width: 100px;
      }
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    &__content {
      .details {
        .column {
          max-width: 50%;

          &:not(:last-child) {
            margin-right: 30px;
          }

          &:first-child {
            .property__name {
              min-width: 108px;
            }
          }

          &:last-child {
            .property__name {
              min-width: 168px;
            }
          }
        }
      }

      .shipping .property__name {
        min-width: 80px;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'lg')) {
    &__content {
      padding: 0 15px;

      .details {
        flex-direction: column;

        .column {
          max-width: unset;

          &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 30px;
          }

          &:first-child .property__name,
          &:last-child .property__name {
            min-width: 160px;
          }
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    &__content {
      .details {
        .column {
          &:first-child .property__name,
          &:last-child .property__name {
            min-width: 150px;
          }
        }
      }
    }
  }
}
</style>
