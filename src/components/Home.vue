<template>
  <div class="row">
    <div class="col-xl-12">
      <charts-lojista class="dashboard-column-chart"
      :tipoGrafico="chartType"
      :colunas="columns"
      :linhas="rows"
      :opcoes="options">
      </charts-lojista>
    </div>
  </div>
</template>
<script>
import { openURL, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import ChartsLojista from 'components/shared/ChartsLojista'

export default {
  name: 'Home',
  data () {
    return {
      chartType: 'ColumnChart',
      columns: [{
        'type': 'string',
        'label': 'Year'
      }, {
        'type': 'number',
        'label': 'Abril'
      }, {
        'type': 'number',
        'label': 'Maio'
      }],
      rows: [
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
      ],
      options: {
        title: 'Clientes Cadastrados',
        colors: ['black', 'gray'],
        hAxis: {
          minValue: '2004',
          maxValue: '2007'
        },
        vAxis: {
          title: '',
          minValue: 300,
          maxValue: 1200
        },
        width: 700,
        height: 450
      }
    }
  },
  components: {
    openURL, ChartsLojista, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
