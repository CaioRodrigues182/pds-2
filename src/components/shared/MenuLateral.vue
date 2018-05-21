<template>
  <div class="items-start menu">
    <q-list-header class="list-header">Bem vindo {{nome}}</q-list-header>
      <q-item v-for="item in menus" v-bind:key="item.menu" class="items">
        <router-link class="links-menu" :to="item.value">
          {{item.menu}}
        </router-link>
      </q-item>
  </div>
</template>
<script>
export default {
  name: 'MenuLateral',
  data () {
    return {
      nome: 'Caio',
      versaosistema: 'versão - 0.01',
      menus: [
        {
          menu: 'Home',
          value: '/home'
        },
        {
          menu: 'Pedidos',
          value: '/pedidos'
        },
        {
          menu: 'Produtos',
          value: '/produtos'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
