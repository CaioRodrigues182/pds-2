<template>
  <div class="col-xl-4 row">
  <div class="col-xl-12">
    <d-t-lojista class="data-table-cliente"
      :titulo="'Pedidos'"
      :dados="tableData"
      :colunas="columns"
      row-key="name" />
  </div>
  <novo-pedido/>
</div>
</template>
<script>
import { openURL, QItemSeparator, QCardTitle, QCardSeparator, QTable, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import DTLojista from 'components/shared/DTLojista'
import NovoPedido from 'components/shared/NovoPedido'

export default {
  name: 'Clientes',
  data () {
    return {
      checkRoute: null,
      filter: '',
      tableData: [
        {name: 'Caio', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Bruno', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Jose', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Joao', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Ronaldo', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Cruzero', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Maria', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Hudson', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Luis', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Karen', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Felipes', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Rodrigo', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Bernardo', telefone: '(34) 99921-3437', preco: 'R$36,00'},
        {name: 'Ander', telefone: '(34) 99921-3437', preco: 'R$36,00'}
      ],
      columns: [
        { name: 'nome', required: true, label: 'Nome do Cliente', align: 'left', field: 'name', sortable: true },
        { name: 'telefone', label: 'Telefone', field: 'telefone', align: 'left', sortable: true },
        { name: 'preco', label: 'Preço do Pedido', field: 'preco', align: 'left', sortable: true }
      ],
      visibleColumns: ['nome', 'telefone', 'cpf']
    }
  },
  components: {
    openURL, DTLojista, QTable, NovoPedido, QItemSeparator, QField, QInput, QCardSeparator, QCardTitle, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
