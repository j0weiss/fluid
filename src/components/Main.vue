<template>
  <div class="container">
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
</template>

<script>
  import Gauge from './Gauge';
  import FluidInput from './FluidInput';
  import PersistenceService from '../services/PersistenceService';
  import {BOTTLE, GLASS, GULP} from "./../constants";

  export default {
    name: "Main",
    components: {
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
      this.fluidGoal = PersistenceService.getFluidGoal();
      this.fluidInputToday = PersistenceService.getFluidInputToday();
    },
    methods: {
      increaseFluidInputToday(amount) {
        this.fluidInputToday += amount;
        PersistenceService.setFluidInputToday(this.fluidInputToday);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
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
</style>