
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
            <a href="#" class="criar-conta" >Esqueceu a senha? </a>
          </q-field>
          </q-card-main>
            <q-btn glossy color="green" style="opacity: 0.8" size="lg" @click="login()" label="ENTRAR" class="q-btn bg-primary full-width text-white button" />
        </q-card>
      </div>
    </div>
</template>
<script>
import { openURL, QField, QInput, QCardTitle, QCard, QCardMain, QCardSeparator } from 'quasar'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      title: 'ACESSAR SISTEMA',
      subtitle: 'PARA ACESSAR O SISTEMA'
    }
  },
  components: {
    QField,
    QInput,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator
  },
  methods: {
    openURL,
    login () {
      this.$router.push({name: 'home'})
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
