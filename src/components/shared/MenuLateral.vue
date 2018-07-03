<template>
  <div class="items-start">
    <q-tabs position="bottom" color="brand" text-color="yellow-2" align="justify">
        <q-route-tab default name="Home" icon="home" to="/home" exact slot="title" label="Home"/>
        <q-route-tab name="Pedidos" icon="inbox" to="/pedidos" exact slot="title" label="Pedidos"/>
        <q-route-tab name="Produtos" icon="reorder" to="/produtos" exact slot="title" label="Produtos"/>
        <q-route-tab name="Perfil" icon="account_circle" to="/perfil" exact slot="title" label="Perfil"/>

      </q-tabs>
  </div>
</template>
<script>
export default {
  name: 'MenuLateral',
  data () {
    return {
      versaosistema: 'versão - 0.01',
      tabsModel: 'Home',
      tabsOptions: [
        {
          label: 'Home',
          value: '/home'
        },
        {
          label: 'Pedidos',
          value: '/pedidos'
        },
        {
          label: 'Produtos',
          value: '/produtos'
        },
        {
          label: 'Perfil',
          value: '/perfil'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
