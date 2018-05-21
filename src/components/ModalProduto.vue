<template>
  <q-modal v-model="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-btn
            flat
            round
            dense
            @click="layoutModal = false"
            icon="reply"
          />
          <q-toolbar-title>
            Header
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar slot="header">
          <q-search class="full-width" inverted v-model="search" color="none" />
        </q-toolbar>

        <q-toolbar slot="footer">
          <q-toolbar-title>
            Footer
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-btn color="primary" @click="layoutModal = false" label="Close" />
        </div>
      </q-modal-layout>
    </q-modal>
</template>
<script>
import { openURL, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal, QModalLayout } from 'quasar'

export default {
  data () {
    return {

    }
  },

  components: {
    openURL, ChartsLojista, QItemSeparator, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QModalLayout, QItemTile
  }
}
</script>
<style>

</style>
