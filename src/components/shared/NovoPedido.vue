<template>
  <div class="card-content col-xl-12 row">
    <q-card>
      <q-card-title>
        Novo Pedido
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <span>Nome do Cliente: Caio</span><br>
        <span>Preço: R$40,99</span><br>
        <span>Produtos: </span>
      </q-card-main>
      <div class="botoes-card">
        <q-btn color="green" @click="opened = false" label="Aceitar" />
        <q-btn color="red" @click="opened = false" label="Recusar" />
      </div>
    </q-card>
  </div>
</template>
<script>
import { openURL, QItemSeparator, QCardTitle, QCardSeparator, QTable, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
export default {
  name: 'NovoPedido',
  data () {
    return {

    }
  },

  components: {
    openURL, QTable, QItemSeparator, QField, QInput, QCardSeparator, QCardTitle, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
