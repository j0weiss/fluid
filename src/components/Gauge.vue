<template>
  <div class="container">
    <svg id="gauge" width="75%"></svg>
  </div>
</template>

<script>
  import { loadLiquidFillGauge } from '../liquidFillGauge';
  import { LIGHT_BLUE, DARK_BLUE } from "../constants";

  export default {
    name: "Gauge",
    mounted: function () {
      const gauge_settings = {
        minValue: 0, // The gauge minimum value.
        maxValue: this.fluidGoal, // The gauge maximum value.
        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
        circleColor: LIGHT_BLUE, // The color of the outer circle.
        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
        waveCount: 1, // The number of full waves per width of the wave circle.
        waveRiseTime: 1000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
        waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
        waveAnimate: true, // Controls if the wave scrolls or is static.
        waveColor: LIGHT_BLUE, // The color of the fill wave.
        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
        textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
        displayPercent: false, // If true, a % symbol is displayed after the value.
        textColor: LIGHT_BLUE, // The color of the value text when the wave does not overlap it.
        waveTextColor: DARK_BLUE // The color of the value text when the wave overlaps it.
      };
      this.gauge = loadLiquidFillGauge("gauge", this.fluidGoal, gauge_settings);
    },
    data: () => {
      return {
        gauge: null
      }
    },
    props: {
      fluidGoal: Number,
      dailyFluid: Number
    },
    watch: {
      dailyFluid() {
        this.gauge.update(this.fluidGoal - this.dailyFluid);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 75%;
    }
  }
</style>