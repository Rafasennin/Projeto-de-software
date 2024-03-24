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
        <v-date-picker v-model="selectedCalendarDate" color="primary" :allowed-dates="allowedDates"
          :allowed-times="allowedTimes">
        </v-date-picker>
      </v-row>
      <v-row justify="d-flex justify-center mt-10 mb-10">
        <label for="timeInput">Horário:</label>
        <input type="time" id="timeInput" v-model="selectedTime">
      </v-row>
    </div>
    {{ selectedTime }}

    <!-- Adicione a seleção de serviço e profissional aqui -->
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select v-model="selectedService" :items="services" label="Serviço" outlined></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select v-model="selectedProfessional" :items="professionals" label="Profissional" outlined></v-select>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-text outlined>
          {{ errorMessage }}
        </v-text>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="goToCheckout" color="primary" class="mb-5">Prosseguir para o Checkout</v-btn>
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
    selectedService: "",
    selectedProfessional: "",
    selectedCalendarDate: new Date(),
    newDate: "",
    errorMessage: "",
    selectedTime:""
  }),

  methods: {
    goToCheckout() {
      // Verifica se todos os campos obrigatórios foram preenchidos
      if (this.selectedService && this.selectedProfessional && this.selectedCalendarDate) {
        const selectedDayOfWeek = this.selectedCalendarDate.getDay(); // Dia da semana (0 = domingo, 1 = segunda-feira, ..., 6 = sábado)

        // Verifica se é um dia útil (segunda a sexta-feira)
        if (selectedDayOfWeek === 0 || selectedDayOfWeek === 6 ) {
          this.errorMessage = "O agendamento só está disponível em dias úteis (segunda a sexta-feira).";
        } else if (!this.selectedTime || parseInt(this.selectedTime.split(":")[0]) < 9 || parseInt(this.selectedTime.split(":")[0]) >= 18) {
          // Verifica se está dentro do horário comercial (das 9h às 18h)
          this.errorMessage = "O agendamento só está disponível dentro do horário comercial (das 9h às 18h).";
        } else {
          this.errorMessage = "";

          const formattedDate = this.selectedCalendarDate.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });
          this.newDate = formattedDate;
          console.log(formattedDate);

          const selectedData = {
            date: encodeURIComponent(formattedDate) ,
            service:encodeURIComponent( this.selectedService),
            professional: encodeURIComponent(this.selectedProfessional),
            time: encodeURIComponent (this.selectedTime)
          };

          //Rota
          this.$router.push({
            name: 'checkout',
            query: selectedData
          });
        }
      } else if (this.selectedService === "") {
        this.errorMessage = "Por favor, selecione o serviço para seguir com o checkout.";
      } else if (this.selectedProfessional === "") {
        this.errorMessage = "Por favor, selecione o profissional para seguir com o checkout.";
      } else {
        this.errorMessage = "Por favor, selecione uma data para o agendamento.";
      }
    }
  }
}
</script>
