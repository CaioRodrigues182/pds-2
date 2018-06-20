
<template>
     <div class="back">
      <div class="form centraForm" >
        <q-card class="card-style card transp">
          <q-card-title align="center" class="transp">
            <div class="title"><strong>{{title}}</strong></div>
            <!--<div class="subtitle">{{subtitle}}</div>-->
          </q-card-title>
          <q-card-main class="transp">
          <q-field icon="person">
            <q-input v-model="email" float-label="Usuario" type="email" suffix="" color="white"/>
          </q-field>
          <br>
          <q-field icon="lock">
            <q-input v-model="password" float-label="Senha" type="password" suffix="" color="white"/>
            <q-btn small class="btn-home" @click="openCadastro">Cadastrar</q-btn>
            <q-btn small class="btn-home" @click="openEsqueceu">Esqueceu a senha?</q-btn>
          </q-field>
          </q-card-main>
            <q-btn glossy color="green" style="opacity: 0.8" size="lg" @click="login()" label="ENTRAR" class="q-btn bg-primary full-width text-white button" />
        </q-card>
      </div>

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
            Cadastro
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-field class="col-xl-12">
            <q-input v-model="text" float-label="Nome do Caboco" />
          </q-field>
          <br>
          <q-field class="col-xl-6 col-md-6 col-ls-6">
            <q-input v-model="text" float-label="CNPJ" />
          </q-field>
          <br>
          <q-field class="col-xl-6 col-md-6 col-ls-6">
            <q-input v-model="text" float-label="Senha" />
          </q-field>

          <div class="botoes-modal">
            <q-btn color="green" @click="opened = false" label="Salvar" />
            <q-btn color="red" @click="opened = false" label="Fechar" />
          </div>

        </div>
      </q-modal-layout>
    </q-modal>

    <q-modal v-model="esqueceu" :content-css="{minWidth: '35vw', minHeight: '35vh'}">
      <q-modal-layout>
        <q-toolbar slot="header" color="black">
          <q-btn
            flat
            round
            dense
            @click="opened = false"
            icon="close"/>

        <q-toolbar-title>
            Esqueceu a sua senha filhinho?
          </q-toolbar-title>
        </q-toolbar>
        <div class="layout-padding">
          <q-field class="col-xl-12">
            <q-input v-model="text" float-label="Poe o email ai" />
          </q-field>
          <div class="botoes-modal">
            <q-btn color="green" @click="esqueceu = false" label="Enviar" />
          </div>
        </div>
      </q-modal-layout>
    </q-modal>
    </div>
</template>
<script>
import { openURL, QField, QModal, QModalLayout, QInput, QCardTitle, QCard, QCardMain, QCardSeparator } from 'quasar'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      text: '',
      password: '',
      opened: false,
      esqueceu: false,
      title: 'ACESSAR SISTEMA',
      subtitle: 'PARA ACESSAR O SISTEMA'
    }
  },
  components: {
    QField,
    QInput,
    QCard,
    QModal,
    QCardTitle,
    QModalLayout,
    QCardMain,
    QCardSeparator
  },
  methods: {
    openURL,
    login () {
      location.href = '/home'
    },
    openCadastro () {
      this.opened = true
    },
    openEsqueceu () {
      this.esqueceu = true
    }
  }
}
</script>

<style>
@media only screen and (max-width: 500px) {
    .form .card {
      width: 500px;
    }
}

@media only screen and (max-width: 400px) {
    .form .card {
      width: 300px
    }
}
</style>
