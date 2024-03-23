<template>
  <HeaderComponent />

  <v-container>
    <v-card class="mx-auto mb-5" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1>Checkout</h1>
      </v-row>
      <hr>
      <v-table>
        <thead>
          <tr>
            <th class="text-center">
              <strong class="text-h5"> Data</strong>
            </th>
            <th class="text-center">
              <strong class="text-h5"> Serviço</strong>
            </th>
            <th class="text-center">
              <strong class="text-h5"> Profissional</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td>{{ selectedData.date }}</td>
            <td>{{ selectedData.service }}</td>
            <td>{{ selectedData.professional }}</td>
          </tr>
        </tbody>
      </v-table>

      <v-row class="ma-5">
        <v-col cols="12" sm="6">
          <v-text-field v-model="cardNumber" label="Número do Cartão" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="cardName" label="Nome no Cartão" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="expiryDate" label="Data de Validade" outlined></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="cvv" label="CVV" outlined></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn color="primary" @click="processPayment" class="mb-10">Pagar</v-btn>
      </v-row>
    </v-card>
    <FooterComponent />
  </v-container>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/Footer.vue'



export default {
  components: {
    HeaderComponent, FooterComponent
  },
  data: () => ({
    selectedData: {}
  }),

  mounted() {
    this.selectedData = this.$route.query;
  }
}
</script>