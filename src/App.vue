<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view />
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader'

  export default {
    name: 'App',
    components: {
      AppHeader,
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
