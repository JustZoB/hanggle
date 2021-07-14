<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
    :class="[theme, fill]"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3.12701 19.3536L1.5765 8.5H22.4235L20.873 19.3536C20.697 20.5852 19.6422 21.5 18.3981 21.5H5.60189C4.35776 21.5 3.30296 20.5852 3.12701 19.3536Z"
      stroke="#191919"
    />
    <path
      d="M17 9V3C17 2.44772 16.5523 2 16 2H8C7.44772 2 7 2.44772 7 3V9"
      stroke="#191919"
      class="without-fill"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconCart',
  props: ['theme', 'fill']
}
</script>
