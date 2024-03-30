<template>
  <HeaderComponent />
  <v-container>
    <v-card class="mx-auto mb-5" max-width="auto">
      <HeaderComponentText />
      <MenuBanner />
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
  </v-container>
  <FooterComponent />

</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuBanner from '../components/MenuBanner.vue'
import FooterComponent from '../components/Footer.vue'
import HeaderComponentText from '../components/HeaderComponentText.vue'



export default {
  components: {
    MenuBanner, HeaderComponent, FooterComponent, HeaderComponentText
  },
  data: () => ({
    services: ['Corte de Cabelo R$ 40,00', 'Afeitar a Barba R$ 30,00', 'Cabelo + Barba R$ 55,00'],
    professionals: ['João', 'Miguel', 'Fernando'],
    selectedService: "",
    selectedProfessional: "",
    selectedCalendarDate: new Date(),
    newDate: "",
    errorMessage: "",
    selectedTime: "",
    currentTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    selectedData: {
      date: "",
      service: "",
      professional: "",
      time: "",
    }
  }),

  methods: {
    goToCheckout() {
      // Verifica se todos os campos obrigatórios foram preenchidos
      if (!this.selectedService) {
        this.errorMessage = "Por favor, selecione o serviço para prosseguir com o checkout.";
      } else if (!this.selectedProfessional) {
        this.errorMessage = "Por favor, selecione o profissional para prosseguir com o checkout.";
      } else if (!this.selectedCalendarDate) {
        this.errorMessage = "Por favor, selecione uma data para o agendamento.";
      } else {
        const currentDate = new Date();
        const selectedDate = new Date(this.selectedCalendarDate);
        currentDate.setHours(0, 0, 0, 0); // Definindo a hora para 00:00:00 para ignorar a hora na comparação
        selectedDate.setHours(0, 0, 0, 0);

        // Verifica se a data selecionada é anterior à data atual
        if (selectedDate < currentDate) {
          this.errorMessage = "A data não pode ser anterior à data atual";
        } else {
          const selectedDayOfWeek = selectedDate.getDay(); // Dia da semana (0 = domingo, 1 = segunda-feira, ..., 6 = sábado)

          // Verifica se é um dia útil (segunda a sexta-feira)
          if (selectedDayOfWeek === 0 || selectedDayOfWeek === 6) {
            this.errorMessage = "O agendamento só está disponível em dias úteis (segunda a sexta-feira).";
          } else if (!this.selectedTime || parseInt(this.selectedTime.split(":")[0]) < 9 || parseInt(this.selectedTime.split(":")[0]) >= 18) {
            // Verifica se está dentro do horário comercial (das 9h às 18h)
            this.errorMessage = "O agendamento só está disponível dentro do horário comercial (das 9h às 18h).";
          } else {
            // Obter a hora atual no mesmo formato que a hora selecionada
            const currentHour = new Date().getHours();
            const currentMinute = new Date().getMinutes();
            const selectedHour = parseInt(this.selectedTime.split(":")[0]);
            const selectedMinute = parseInt(this.selectedTime.split(":")[1]);

            // Comparar a hora atual com a hora selecionada

            if (selectedDate > currentDate || (selectedDate.getTime() === currentDate.getTime() && (currentHour < selectedHour || (currentHour === selectedHour && currentMinute <= selectedMinute)))) {
              this.errorMessage = "";
              const formattedDate = selectedDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              });
              this.newDate = formattedDate;


              this.selectedData.date = encodeURIComponent(formattedDate),
                this.selectedData.service = encodeURIComponent(this.selectedService),
                this.selectedData.professional = encodeURIComponent(this.selectedProfessional),
                this.selectedData.time = encodeURIComponent(this.selectedTime)


              // Rota
              this.$router.push({
                name: 'checkout',
                query: this.selectedData
              });
            } else {
              this.errorMessage = "O agendamento só está disponível em horários futuros.";
            }
          }
        }
      }
    }
  }
}
</script>
