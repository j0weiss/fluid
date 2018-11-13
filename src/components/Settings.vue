<template>
  <div class="container">
    <div class="settings">
      <FormInput label="Fluid Goal:"
                 v-bind:value="fluidGoal"
                 unit="liters"
                 justify-content="space-between"
                 class="input"
                 v-on:value-changed="updateFluidGoal"
      />
      <FormInput label="Fluid Input Today:"
                 v-bind:value="fluidInputToday"
                 unit="liters"
                 justify-content="space-between"
                 class="input"
                 v-on:value-changed="updateFluidInputToday"
      />
    </div>
    <div class="controls">
      <Button label="Save"
              v-on:click.native="saveSettings"
      />
      <Button label="Reset"
              v-on:click.native="reset"
      />
    </div>
  </div>
</template>

<script>
  import FormInput from './shared/FormInput'
  import Button from './shared/Button'
  import PersistenceService from './../services/PersistenceService'

  export default {
    name: "Settings",
    components: {
      FormInput,
      Button
    },
    data: function () {
      return {
        fluidGoal: null,
        fluidInputToday: null
      }
    },
    methods: {
      updateFluidGoal(newFluidGoal) {
        this.fluidGoal = newFluidGoal;
      },
      updateFluidInputToday(newFluidInput) {
        this.fluidInputToday = newFluidInput;
      },
      saveSettings() {
        PersistenceService.setFluidGoal(this.fluidGoal);
        PersistenceService.setFluidInputToday(this.fluidInputToday);
        this.$router.push('/');
      },
      reset() {
        this.fluidInputToday = 0;
      }
    },
    created: function () {
      this.fluidGoal = PersistenceService.getFluidGoal();
      this.fluidInputToday = PersistenceService.getFluidInputToday();
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .settings {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .input {
    padding: 1em 1em;
  }

  .controls {
    margin-bottom: 3em;
    display: flex;
    justify-content: space-around;
  }
</style>