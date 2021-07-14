<template>
  <div class="footer__bottom">
    <div class="item">
      <div class="footer__shipping">
        <h3>Insured shipping</h3>
        <div class="images">
          <img src="@/assets/images/dhl.png" alt="DHL">
          <img src="@/assets/images/ups.png" alt="ups">
        </div>

      </div>
      <div class="footer__payment">
        <h3>Payment methods</h3>
        <div class="images">
          <img src="@/assets/images/visa-mc-ad.png" alt="Visa, Mastercard and American express">
          <img src="@/assets/images/paypal.png" alt="PayPal">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="footer__copyright fs-m">© 2021 HANGGLE - Marketplace for designer second hand fashion.</div>
      <div class="footer__social fs-m">
        <a href="https://www.pinterest.com/" target="_blank">
          <FontAwesomeIcon :icon="pinterestIcon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon :icon="instagramIcon" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon :icon="facebookIcon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default {
  name: 'FooterBottom',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      facebookIcon: faFacebookSquare,
      pinterestIcon: faPinterest,
      instagramIcon: faInstagram
    }
  }
}
</script>

<style lang="scss">
.footer__bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__shipping,
    .footer__payment {
      display: flex;
      align-items: center;
      margin-bottom: 30px;

      & > *:not(:last-child) {
        margin-right: 30px;
      }

      .images {
        display: flex;

        & > *:not(:last-child) {
          margin-right: 30px;
        }
      }
    }

    .footer__social > * {
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 14px;
      }
    }

    .footer__copyright {
      line-height: 150%;
    }
  }

  @media (max-width: map-get($grid-breakpoints, 'xl')) {
    .item {
      .footer__shipping,
      .footer__payment {
        margin-bottom: 20px;

        & > *:not(:last-child),
        .images > *:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'md')) {
    .item {
      align-items: flex-start;

      .footer__shipping,
      .footer__payment {
        width: 50%;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;

        & > *:not(:last-child) {
          margin-right: 0;
          margin-bottom: 15px;
        }

        .images > *:not(:last-child) {
          margin-right: 10px;
        }
      }

      &:last-child {
        flex-direction: column;
      }

      .footer__social {
        order: -1;
        margin-bottom: 15px;
      }
    }
  }
  @media (max-width: map-get($grid-breakpoints, 'sm')) {
    .item {
      flex-direction: column;

      .footer__shipping,
      .footer__payment {
        width: 100%;
      }
    }
  }
}
</style>
