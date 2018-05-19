<template>
<div class="row">
  <div class="col-xl-1">
     <d-t-lojista class="data-table-cliente"
      title="Clientes"
      :dados="tableData"
      :colunas="columns"
      row-key="name" />
  </div>
</div>
</template>
<script>
import { openURL, QTable, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import DTLojista from 'components/shared/DTLojista'

export default {
  name: 'Produtos',
  data () {
    return {
      tableData: [
        {name: 'Pizza', preco: 'R$39,90'},
        {name: 'Sorvete', preco: 'R$39,90'},
        {name: 'Agua', preco: 'R$39,90'},
        {name: 'Refrigerante', preco: 'R$39,90'},
        {name: 'Açai', preco: 'R$39,90'},
        {name: 'Cruzero', preco: 'R$39,90'},
        {name: 'Maria', preco: 'R$39,90'}
      ],
      columns: [
        { name: 'nome', required: true, label: 'Nome do Produto', align: 'left', field: 'name', sortable: true },
        { name: 'preco', label: 'Preço', field: 'preco', align: 'left', sortable: true }
      ],
      visibleColumns: ['nome', 'preco']
    }
  },
  components: {
    openURL, QTable, DTLojista, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
