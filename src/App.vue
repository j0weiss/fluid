<template>
  <div id="app">
    <Setup />
  </div>
</template>

<script>
  import Setup from './components/Setup'
  export default {
    name: 'app',
    components: {
      Setup
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
</style>
