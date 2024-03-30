<template>
  <div>
    <HeaderComponent />
    <v-container >
      <v-card class=" bg-grey-lighten-1 text-black text-center" max-width="auto">
        <v-row dense class=" d-flex justify-center">
          <h1 class="ma-5">Comprovante de Pagamento e Agendamento</h1>
        </v-row>
        <v-table>
        <thead>
          <tr class="bg-grey">
            <th class="text-center">
              <strong class="text-h3 text-subtitle-1 sm-h3"> Data e Hora</strong>
            </th>
            <th class="text-center">
              <strong class="text-h3 text-subtitle-1 sm-h3"> Serviço</strong>
            </th>
            <th class="text-center">
              <strong class="text-h3 text-subtitle-1 sm-h3"> Profissional</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="text-h6 text-subtitle-2 sm-h6">{{ decodedData.date }} - {{ decodedData.time }}</td>
            <td class="text-h6 text-subtitle-2 sm-h6">{{ decodedData.service }}</td>
            <td class="text-h6 text-subtitle-2 sm-h6">{{ decodedData.professional }}</td>
          </tr>
        </tbody>
      </v-table>
        <v-row dense class="d-flex justify-center">
          <h2 v-if="successMessage !==''" class="mt-5">{{ successMessage }}</h2>
        </v-row>
        <v-row class="d-flex justify-center mt-4">
          <v-btn class="mx-auto mb-10 mt-3" color="primary" @click="printContent">Imprimir</v-btn>
          <v-btn :to="linkServicos"  class="mx-auto mb-10 mt-3" color="secondary">Voltar</v-btn>
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
      boletoCPF: '',
      decodedData: {}
    }
  },

  mounted() {
    this.successMessage = this.$route.query.successMessage;
    this.decodedData = JSON.parse(this.$route.query.decodedData);
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
  },


}
</script>