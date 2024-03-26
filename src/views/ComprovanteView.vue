<template>
  <div>
    <HeaderComponent />
    <v-container>
      <v-card class="mx-auto bg-grey-lighten-1 text-black" max-width="70vw">
        <v-row dense class="d-flex justify-center">
          <h1>Comprovante de Pagamento e Agendamento</h1><br>
        </v-row>
        <v-row dense class="d-flex justify-center">
          <h2 v-if="successMessage !==''">{{ successMessage }}</h2>
        </v-row>
        <v-row class="d-flex justify-center mt-4">
          <v-btn class="ma-10" color="primary" @click="printContent">Imprimir</v-btn>
          <v-btn :to="linkServicos"  class="ma-10" color="secondary">Voltar</v-btn>
        </v-row>
      </v-card>
      <FooterComponent />
    </v-container>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  name: 'ComprovantePagamento',
  components: {
    HeaderComponent, FooterComponent
  },
  data() {
    return {
      linkServicos: "/",
      successMessage: '',
      creditCard: {},
      pixKey: '',
      paypalEmail: '',
      boletoName: '',
      boletoCPF: ''

    }
  },

  created() {
    this.successMessage = this.$route.query.successMessage;
    this.creditCard = this.$route.query;
    this.pixKey = this.$route.query.pixKey;
    this.paypalEmail = this.$route.query.paypalEmail;
    this.boletoName = this.$route.query.boletoName;
    this.boletoCPF = this.$route.query.boletoCPF;
  },

  methods: {
    printContent() {
      window.print(); // Chama a função de impressão do navegador
    }
  }

}
</script>