<template>
  <HeaderComponent />
  <MenuBanner />
  <v-container>
    <v-card class="mx-auto mb-5" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1>Agenda</h1>
      </v-row>
    </v-card>

    <div>
        <v-row justify="space-around">
          <v-date-picker color="primary"></v-date-picker>
        </v-row>
    </div>

    <!-- Adicione a seleção de serviço e profissional aqui -->
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select v-model="selectedService" :items="services" label="Serviço" outlined></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select v-model="selectedProfessional" :items="professionals" label="Profissional" outlined></v-select>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn @click="goToCheckout" color="primary" class="ma-10">Prosseguir para o Checkout</v-btn>
    </v-row>
    <FooterComponent />
  </v-container>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuBanner from '../components/MenuBanner.vue'
import FooterComponent from '../components/Footer.vue'



export default {
  components: {
    MenuBanner, HeaderComponent, FooterComponent
  },
  data: () => ({
    services: ['Corte de Cabelo R$ 40,00', 'Afeitar a Barba R$ 30,00', 'Cabelo + Barba R$ 55,00'],
    professionals: ['João', 'Miguel', 'Fernando'],
  }),
  methods: {
    selectEvent(event) {
      console.log(event)
    },
    goToCheckout() {
      const selectedData = {
        date: this.value,
        service: this.selectedService,
        professional: this.selectedProfessional,
      };
      console.log(selectedData);
      // Aqui você pode implementar a navegação para a tela de checkout ou executar qualquer outra ação necessária
    }
  }
}
</script>
