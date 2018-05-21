<template>
<div class="row">
  <div class="col-xl-1">
     <d-t-lojista class="data-table-cliente"
      :titulo="'Produtos'"
      :dados="tableData"
      :colunas="columns"
      row-key="name" />
    <float-button />
  </div>
</div>
</template>
<script>
import { openURL, QTable, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import DTLojista from 'components/shared/DTLojista'
import FloatButton from 'components/shared/FloatButton'

export default {
  name: 'Produtos',
  data () {
    return {
      tableData: [
        {name: 'Pizza', preco: 'R$39,90', qtd: 5},
        {name: 'Sorvete', preco: 'R$39,90', qtd: 5},
        {name: 'Agua', preco: 'R$39,90', qtd: 5},
        {name: 'Refrigerante', preco: 'R$39,90', qtd: 5},
        {name: 'Açai', preco: 'R$39,90', qtd: 5},
        {name: 'Cruzero', preco: 'R$39,90', qtd: 5},
        {name: 'Maria', preco: 'R$39,90', qtd: 5}
      ],
      columns: [
        { name: 'nome', required: true, label: 'Nome do Produto', align: 'left', field: 'name', sortable: true },
        { name: 'preco', label: 'Preço', field: 'preco', align: 'left', sortable: true },
        { name: 'qtd', label: 'Quantidade', field: 'qtd', align: 'left', sortable: true }
      ],
      visibleColumns: ['nome', 'preco']
    }
  },
  components: {
    openURL, QTable, DTLojista, FloatButton, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
