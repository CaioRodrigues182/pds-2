<template>
  <q-layout :view="view">
    <q-layout-drawer side="left" v-model="left" :content-class="$q.theme === 'mat' ? 'bg-grey-3' : null">
        <q-list-header class="list-header">Bem vindo {{nome}}</q-list-header>
          <q-item v-for="item in menus" v-bind:key="item.menu" class="items">
            <router-link class="links-menu" :to="item.value">
              {{item.menu}}
            </router-link>
          </q-item>
    </q-layout-drawer>
  </q-layout>
</template>
<script>
export default {
  name: 'MenuLateral',
  data () {
    return {
      nome: 'Caio',
      versaosistema: 'versão - 0.01',
      left: true,
      view: 'hhh lpr fff',
      menus: [
        {
          menu: 'Home',
          value: '/home'
        },
        {
          menu: 'Clientes',
          value: '/clientes'
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
