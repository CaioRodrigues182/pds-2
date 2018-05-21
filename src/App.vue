<template>
  <div id="q-app">
    <menu-lateral v-if="checkRoute"></menu-lateral>
    <router-view />
  </div>
</template>

<script>
import MenuLateral from 'components/shared/MenuLateral'

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
    MenuLateral
  }
}

</script>

<style>
</style>
