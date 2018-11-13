<template>
  <form v-bind:style="cssProps">
    <label for="fluidGoal">{{ label }}</label>
    <div>
      <input id="fluidGoal" type="number"
             v-bind:value="value"
             v-on:click="selectAll"
             v-on:change="emitChangedValue"
      />
      <label for="fluidGoal">{{ unit }}</label>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'FormInput',
    props: ['label', 'value', 'unit', 'justifyContent'],
    methods: {
      selectAll(event) {
        event.target.select();
      },
      emitChangedValue(event) {
        const value = parseFloat(event.target.value) || 0;
        this.$emit('value-changed', value)
      }
    },
    computed: {
      cssProps() {
        return {
          '--justify-content': this.justifyContent
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  form {
    width: 100%;
    display: flex;
    justify-content: var(--justify-content);
  }

  input {
    background-color: transparent;
    border: none;
    font: inherit;
    color: inherit;
    width: 2.5em;
    margin-right: 0.25em;
    text-align: right;
  }
</style>