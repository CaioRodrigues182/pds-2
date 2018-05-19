<template>
<div class="float-action-button">
  <q-fab icon="keyboard_arrow_up" direction="up" color="black">
    <q-fab-action color="black" class="white" icon="person add" />
    <q-fab-action color="black" icon="mail" />
  </q-fab>
</div>

</template>
<script>
import { openURL, QTable, QFab, QPageSticky, QFabAction, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal } from 'quasar'

export default {
  name: 'FloatButton',
  data () {
    return {

    }
  },

  components: {
    openURL, QTable, QItemSeparator, QFab, QPageSticky, QFabAction, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile
  }

}
</script>
<style>

</style>
