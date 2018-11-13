<template>
  <header>
    <template v-if="isMainPath">
      <h1>Fluid</h1>
      <router-link to='/settings'>
        <font-awesome-icon icon="cog" class="settings-icon"></font-awesome-icon>
      </router-link>
    </template>
    <template v-if="isSettingsPath" >
      <h1>Settings</h1>
      <router-link to='/'>
        <font-awesome-icon icon="chevron-left" class="settings-icon"></font-awesome-icon>
      </router-link>
    </template>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    computed: {
      isMainPath: function () {
        return this.$route.path === '/';
      },
      isSettingsPath: function () {
        return this.$route.path === '/settings';
      }
    }
  }
</script>

<style lang="scss" scoped>

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3em;
  }

  h1 {
    margin-left: 1em;
  }

  .settings-icon {
    margin-right: 1em;
  }
</style>