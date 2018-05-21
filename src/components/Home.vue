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
  mounted () {

  },
  data () {
    return {
      chartType: 'ColumnChart',
      columns: [{
        'type': 'string',
        'label': 'Year'
      }, {
        'type': 'number',
        'label': 'Quantidade'
      }],
      rows: [
        ['Março', 1000],
        ['Abril', 1170],
        ['Maio', 660],
        ['Junho', 1030]
      ],
      options: {
        title: 'Pedidos por mês',
        colors: ['black'],
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
  methods: {

  },
  components: {
    openURL, ChartsLojista, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
