<template>
  <HeaderComponent />

  <v-container>
    <v-card class="mx-auto mb-5" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1 class="ma-5">Checkout</h1>
      </v-row>
      <hr>
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
    </v-card>
    <PaymentComponent :decodedData="decodedData" />
    <FooterComponent />
  </v-container>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import FooterComponent from '../components/Footer.vue'
import PaymentComponent from '../components/PaymentComponent'

export default {
  components: {
    HeaderComponent, FooterComponent, PaymentComponent
  },
  data: () => ({
    decodedData: {}
  }),


    mounted() {
      // Recupera os parâmetros da URL
      const params = new URLSearchParams(this.$route.query);

      // Verifica se há dados na URL
      if (params.has('date') && params.has('service') && params.has('professional') && params.has('time')) {
        // Decodifica os dados da URL
        const date = decodeURIComponent(params.get('date'));
        const service = decodeURIComponent(params.get('service'));
        const professional = decodeURIComponent(params.get('professional'));
        const time = decodeURIComponent(params.get('time'));
       

        // Armazena os dados decodificados no objeto decodedData
        this.decodedData = { date, service, professional, time };
      } else {
        // Se os parâmetros não estiverem presentes, os dados não foram fornecidos corretamente na URL
        console.error('Parâmetros ausentes na URL!');
      }

    }
  }
</script>
