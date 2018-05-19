<template>
<div>
  <vue-chart class="dashboard-column-chart"
    :chart-type="tipoGrafico"
    :columns="colunas"
    :rows="linhas"
    :options="opcoes">
  </vue-chart>
</div>

</template>
<script>
export default {
  props: {
    tipoGrafico: String,
    colunas: Array,
    linhas: Array,
    opcoes: Object
  }

}
</script>
<style>

</style>
