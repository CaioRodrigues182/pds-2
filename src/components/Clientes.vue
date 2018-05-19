<template>
  <div class="col-xl-4 row">
  <div class="col-xl-12">
    <d-t-lojista class="data-table-cliente"
      title="Clientes"
      :dados="tableData"
      :colunas="columns"
      row-key="name" />

  </div>
</div>
</template>
<script>
import { openURL, QItemSeparator, QTable, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import MenuLateral from 'components/MenuLateral'
import DTLojista from 'components/shared/DTLojista'

export default {
  name: 'Clientes',
  data () {
    return {
      filter: '',
      tableData: [
        {name: 'Caio', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Bruno', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Jose', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Joao', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Ronaldo', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Cruzero', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Maria', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Hudson', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Luis', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Karen', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Felipes', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Rodrigo', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Bernardo', telefone: '(34) 99921-3437', cpf: '23234234928'},
        {name: 'Ander', telefone: '(34) 99921-3437', cpf: '23234234928'}
      ],
      columns: [
        { name: 'nome', required: true, label: 'Nome', align: 'left', field: 'name', sortable: true },
        { name: 'telefone', label: 'Telefone', field: 'telefone', align: 'left', sortable: true },
        { name: 'cpf', label: 'CPF', field: 'cpf', align: 'left', sortable: true }
      ],
      visibleColumns: ['nome', 'telefone', 'cpf']
    }
  },
  components: {
    openURL, MenuLateral, DTLojista, QTable, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
