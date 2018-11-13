<template>
  <button>
    <font-awesome-icon v-bind:icon="icon" class="fluid-input-icon"></font-awesome-icon>
    <span class="fluid-input-label">{{ label }}</span>
  </button>
</template>

<script>
  export default {
    name: "FluidInput",
    props: {
      icon: String,
      label: String
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/colors.scss";

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 4em;
    width: 4em;
    margin: 1em 0.25em;
    font: inherit;
    color: inherit;
    border: none;
    border-radius: 4em;
    background-color: transparent;
    transition: background-color 1s ease;
  }

  button:active {
    background-color: white;
  }

  .fluid-input-icon{
    font-size: 1.25em;
  }

  .fluid-input-label {
    font-size: 0.5em;
  }
</style>