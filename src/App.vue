<template>
  <div id="app">
    <Setup v-if="this.fluidGoal === 0"
           v-on:setup-finished="getFluidGoalFromLocalStorage"/>
    <Gauge v-else
           v-bind:fluid-goal="this.fluidGoal"
           v-bind:daily-fluid="this.dailyFluid"/>
  </div>
</template>

<script>
  import Setup from './components/Setup'
  import Gauge from './components/Gauge'
  import { FLUID_GOAL } from "./constants";

  export default {
    name: 'app',
    components: {
      Setup,
      Gauge
    },
    data: function () {
      return {
        fluidGoal: 0,
        dailyFluid: 0
      }
    },
    created: function () {
      this.getFluidGoalFromLocalStorage();
    },
    methods: {
      getFluidGoalFromLocalStorage() {
        this.fluidGoal = parseInt(window.localStorage.getItem(FLUID_GOAL)) || 0;
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
