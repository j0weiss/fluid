<template>
  <div id="app">
    <Setup v-if="this.fluidGoal === 0"
           v-on:setup-finished="getFluidInformationFromLocalStorage"/>
    <div v-else id="main-screen">
      <Gauge id="gauge"
             v-bind:fluid-goal="this.fluidGoal"
             v-bind:fluid-input-today="this.fluidInputToday"/>
      <div id="fluid-input-controls">
        <FluidInput icon="wine-glass-alt"
                    label="120 ml"
                    v-on:click.native="increaseFluidInputToday(GULP)"></FluidInput>
        <FluidInput icon="wine-glass"
                    label="250 ml"
                    v-on:click.native="increaseFluidInputToday(GLASS)"></FluidInput>
        <FluidInput icon="wine-bottle"
                    label="500 ml"
                    v-on:click.native="increaseFluidInputToday(BOTTLE)"></FluidInput>
      </div>
    </div>
  </div>
</template>

<script>
  import Setup from './components/Setup';
  import Gauge from './components/Gauge';
  import FluidInput from './components/FluidInput';
  import {FLUID_GOAL, FLUID_INPUT_TODAY, GULP, GLASS, BOTTLE} from "./constants";

  export default {
    name: 'app',
    components: {
      Setup,
      Gauge,
      FluidInput
    },
    data: function () {
      return {
        fluidGoal: 0,
        fluidInputToday: 0,
        GULP: GULP,
        GLASS: GLASS,
        BOTTLE: BOTTLE
      }
    },
    created: function () {
      this.getFluidInformationFromLocalStorage();
    },
    methods: {
      getFluidInformationFromLocalStorage() {
        this.fluidGoal = parseFloat(window.localStorage.getItem(FLUID_GOAL)) || 0;
        this.fluidInputToday = parseFloat(window.localStorage.getItem(FLUID_INPUT_TODAY)) || 0;
      },
      increaseFluidInputToday(amount) {
        this.fluidInputToday += amount;
        window.localStorage.setItem(FLUID_INPUT_TODAY, this.fluidInputToday.toString());
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

  #main-screen {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  #gauge {
    flex: 1 1 auto;
  }

  #fluid-input-controls {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  *:focus {
    outline: none;
  }
</style>
