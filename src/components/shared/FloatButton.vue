<template>
<div class="float-action-button">
  <q-fab icon="keyboard_arrow_up" direction="up" color="black">
    <q-fab-action color="black" @click="openModalProduto()  " class="white" icon="playlist_add" />
  </q-fab>

   <q-modal v-model="opened" :content-css="{minWidth: '40vw', minHeight: '50vh'}">
    <q-modal-layout>
        <q-toolbar slot="header" color="black">
          <q-btn
            flat
            round
            dense
            @click="opened = false"
            icon="close"/>

          <q-toolbar-title>
            Criação de novo produto
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-field class="col-xl-12">
            <q-input v-model="text" float-label="Nome do Produto" />
          </q-field>
          <br>
          <q-field class="col-xl-6 col-md-6 col-ls-6">
            <q-input v-model="text" float-label="Preço" />
          </q-field>
          <br>
          <q-field class="col-xl-6 col-md-6 col-ls-6">
            <q-input v-model="text" float-label="Quantidade" />
          </q-field>

          <div class="botoes-modal">
            <q-btn color="green" @click="opened = false" label="Salvar" />
            <q-btn color="red" @click="opened = false" label="Fechar" />
          </div>

        </div>
      </q-modal-layout>
  </q-modal>
</div>

</template>
<script>
import { openURL, QTable, QFab, QPageSticky, QSearch, QFabAction, QItemSeparator, QField, QInput, QCard, QCardMain, QItem, QItemTile, QList, QPopover, QToggle, QBtn, QModal, QModalLayout } from 'quasar'

export default {
  name: 'FloatButton',
  data () {
    return {
      opened: false,
      search: ''
    }
  },

  components: {
    openURL, QTable, QItemSeparator, QFab, QPageSticky, QSearch, QFabAction, QField, QInput, QCard, QItem, QList, QPopover, QToggle, QBtn, QModal, QCardMain, QItemTile, QModalLayout
  },

  methods: {
    openModalProduto () {
      this.opened = true
    }
  }

}
</script>
<style>

</style>
