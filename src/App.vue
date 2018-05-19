<template>
  <div id="q-app">
    <menu-lateral></menu-lateral>
    <router-view />
    <float-button />
  </div>
</template>

<script>
import MenuLateral from 'components/shared/MenuLateral'
import FloatButton from 'components/shared/FloatButton'

export default {
  name: 'App',

  components: {
    MenuLateral, FloatButton
  }
}

</script>

<style>
</style>
