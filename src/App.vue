<template>
  <div id="app">
    <Setup v-if="getFluidGoalFromLocalStorage() === 0"
           v-on:setup-finished="$forceUpdate()"/>
    <div v-else>
      <p style="margin: 0;">Setup finished</p>
    </div>
  </div>
</template>

<script>
  import Setup from './components/Setup'
  import { FLUID_GOAL } from "./constants";

  export default {
    name: 'app',
    components: {
      Setup
    },
    methods: {
      getFluidGoalFromLocalStorage() {
        return window.localStorage.getItem(FLUID_GOAL) || 0;
      }
    }
  }
</script>

<style lang="scss">
  @import 'styles/colors.scss';

  body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background-color: $dark-blue;
    color: $light-blue;
  }

  *:focus {
    outline: none;
  }
</style>
