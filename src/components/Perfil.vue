
<template>
     <div class="perfil">
      <div class="form centraPerfil" >
        <q-card class="card-style card ">
          <p class="sair"><a href="#" id="sair" >Sair</a></p>
         <q-card-main class="perfilCss">
          <q-card-title align="center" >
            <div class="title"><strong>{{title}}</strong></div>
          </q-card-title>
          <q-field>
            NOME:
          </q-field>
          <q-field>
            {{nome}}
          </q-field>
          <br>
          <q-field>
            EMPRESA:
          </q-field>
          <q-field>
            {{empresa}}
          </q-field>
          <br>
          <q-field>
            EMAIL:
          </q-field>
          <q-field>
            {{email}}
          </q-field>
          </q-card-main>
        </q-card>
      </div>
    </div>
</template>
<script>
import { openURL, QField, QModal, QModalLayout, QInput, QCardTitle, QCard, QCardMain, QCardSeparator } from 'quasar'
export default {
  name: 'Perfil',
  data () {
    return {
      email: 'logista@email.com',
      nome: 'Logista do Sistema',
      title: 'PERFIL',
      empresa: 'Nome empresa'
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
    openURL
  }
}
</script>

<style>
</style>
