<template>
  <div id="q-app">
    <menu-lateral v-show="checkRoute"></menu-lateral>
    <router-view />
    <float-button v-show="checkRoute" />
  </div>
</template>

<script>
import MenuLateral from 'components/shared/MenuLateral'
import FloatButton from 'components/shared/FloatButton'

export default {
  name: 'App',
  data () {
    return {
      checkRoute: true
    }
  },

  mounted () {
    this.checkRoutes()
  },

  methods: {
    checkRoutes () {
      if (window.location.pathname === '/') {
        this.checkRoute = false
      } else {
        this.checkRoute = true
      }
    }
  },

  components: {
    MenuLateral, FloatButton
  }
}

</script>

<style>
</style>
