<template>
<div class="row">
  <div class="col-xl-1">
    <menu-lateral></menu-lateral>
  </div>
</div>
</template>
<script>
import { openURL, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'
import MenuLateral from 'components/MenuLateral'

export default {
  name: 'Produtos',
  data () {
    return {

    }
  },
  components: {
    openURL, MenuLateral, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }
}
</script>
<style>

</style>
