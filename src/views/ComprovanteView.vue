<template>
  <HeaderComponent />
  <v-container>
    <v-card class="mx-auto bg-light-blue text-black" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1>Comprovante de Pagamento e Agendamento</h1><br>
        <h3 v-if="successMessage !==''">{{ successMessage }}</h3>
      </v-row>
    </v-card>
    <FooterComponent />
  </v-container>
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
  }

}
</script>