<template>
  <div class="container">
    <p>How much do you want to drink per day?</p>
    <form>
      <input id="fluidGoal" v-model.number="fluidGoal" type="number" maxlength="1" v-on:click="selectAll">
      <label for="fluidGoal">liters</label>
    </form>
    <Button label="Start" v-on:click.native="saveFluidGoal" />
  </div>
</template>

<script>
  import Button from './shared/Button';
  import PersistenceService from '../services/PersistenceService';

  export default {
    name: "Setup",
    components: {
      Button
    },
    data: () => {
      return {
        fluidGoal: 2
      }
    },
    methods: {
      selectAll(event) {
        event.target.select();
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

  form > input {
    background-color: transparent;
    border: none;
    font: inherit;
    color: inherit;
    width: 1.5em;
  }

  Button {
    margin-top: auto;
    margin-bottom: 3em;
  }
</style>