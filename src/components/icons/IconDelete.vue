<template>
  <svg
    v-if="!small"
    @click="$emit('click')"
    class="icon"
    :class="theme"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M6.24991 26.2263L4.54752 7.5H25.4525L23.7501 26.2263C23.633 27.514 22.5534 28.5 21.2604 28.5H8.73964C7.44664 28.5 6.36697 27.514 6.24991 26.2263Z"
      stroke="#191919"
    />
    <path
      d="M20 5V2C20 1.44772 19.5523 1 19 1H11C10.4477 1 10 1.44772 10 2V5"
      stroke="#191919"
    />
    <rect
      x="2.5"
      y="4.5"
      width="25"
      height="3"
      rx="0.5"
      stroke="#191919"
    />
    <path
      d="M15 10V26"
      stroke="#191919"
    />
    <path
      d="M20 10L19 26"
      stroke="#191919"
    />
    <path
      d="M10 10L11 26"
      stroke="#191919"
    />
  </svg>

  <svg
    v-else
    @click="$emit('click')"
    class="icon"
    :class="theme"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M4.72092 16.2168L3.77587 5.35715H16.2235L15.2785 16.2168C15.1661 17.5086 14.0846 18.5 12.7879 18.5H7.2115C5.9148 18.5 4.83334 17.5086 4.72092 16.2168Z"
      stroke="#191919"
    />
    <path
      d="M13.0767 3.57143V2C13.0767 1.44772 12.629 1 12.0767 1H7.92285C7.37057 1 6.92285 1.44772 6.92285 2V3.57143"
      stroke="#191919"
    />
    <rect
      x="2.5"
      y="3.42856"
      width="15"
      height="1.57143"
      rx="0.5"
      stroke="#191919"
    />
    <path
      d="M10 6.78571V17.0714"
      stroke="#191919"
    />
    <path
      d="M13.0773 6.78571L12.4619 17.0714"
      stroke="#191919"
    />
    <path
      d="M6.9227 6.78571L7.53809 17.0714"
      stroke="#191919"
    />
  </svg>
</template>

<script>
export default {
  name: 'IconDelete',
  props: ['theme', 'small']
}
</script>
