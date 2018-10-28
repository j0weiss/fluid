<template>
  <button>{{ label }}</button>
</template>

<script>
  export default {
    name: "Button",
    props: ['label']
  }
</script>

<style lang="scss" scoped>
  @import '../../styles/colors.scss';

  button {
    font: inherit;
    color: inherit;
    background: transparent;
    border: 1px solid $light-blue;
    border-radius: 0.5em;
    padding: 0 1em;
  }
</style>