<template>
  <header>
    <router-link v-if="isMainPath" to='/settings'>
      <font-awesome-icon icon="cog" class="settings-icon"></font-awesome-icon>
    </router-link>
    <router-link v-if="isSettingsPath" to='/'>
      <font-awesome-icon icon="chevron-left" class="settings-icon"></font-awesome-icon>
    </router-link>
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
    justify-content: flex-end;
  }

  .settings-icon {
    margin: 1em;
  }
</style>