<template>
  <div class="container">
    <p>How much do you want to drink per day?</p>
    <FormInput label=""
               v-bind:value="fluidGoal"
               unit="liters"
               justify-content="center"
               v-on:value-changed="updateFluidGoal"
    />
    <Button label="Start" v-on:click.native="saveFluidGoal" />
  </div>
</template>

<script>
  import Button from './shared/Button';
  import PersistenceService from '../services/PersistenceService';
  import FormInput from './shared/FormInput';

  export default {
    name: "Setup",
    components: {
      FormInput,
      Button
    },
    data: () => {
      return {
        fluidGoal: 2
      }
    },
    methods: {
      updateFluidGoal(newFluidGoal) {
        this.fluidGoal = newFluidGoal;
      },
      saveFluidGoal() {
        PersistenceService.setFluidGoal(this.fluidGoal);
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    text-align: center;
    margin: 3em 2em;
  }

  Button {
    margin-top: auto;
    margin-bottom: 3em;
  }
</style>