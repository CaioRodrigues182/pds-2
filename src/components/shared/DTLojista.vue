<template>
<div>
  <q-table class="data-table-cliente"
    title="Clientes"
    :data="dados"
    :columns="colunas"
    row-key="name" />
</div>

</template>
<script>
import { openURL, QTable, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'

export default {
  name: 'DTLojista',
  props: {
    dados: Array,
    colunas: Array
  },
  data () {
    return {
      name: ''
    }
  },

  components: {
    openURL, QTable, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }

}
</script>
<style>

</style>
