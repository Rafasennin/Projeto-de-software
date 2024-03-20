<template>
  <HeaderComponent />
  <MenuBanner />
  <v-container>
    <v-card class="mx-auto" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1>Agenda</h1>
      </v-row>
    </v-card>
  
    <div>
      <v-sheet
        class="d-flex"
        height="54"
        tile
      >
        <v-select
          v-model="type"
          :items="types"
          class="ma-2"
          label="View Mode"
          variant="outlined"
          dense
          hide-details
        ></v-select>
        <v-select
          v-model="weekday"
          :items="weekdays"
          class="ma-2"
          label="weekdays"
          variant="outlined"
          dense
          hide-details
        ></v-select>
      </v-sheet>
      <v-sheet>
        <v-calendar
          ref="calendar"
          v-model="value"
          :events="events"
          :view-mode="type"
          :weekdays="weekday"
          @click:event="selectEvent"
        ></v-calendar>
      </v-sheet>
    </div>

    <!-- Adicione a seleção de serviço e profissional aqui -->
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select
          v-model="selectedService"
          :items="services"
          label="Serviço"
          outlined
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-select
          v-model="selectedProfessional"
          :items="professionals"
          label="Profissional"
          outlined
        ></v-select>
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
import { useDate } from 'vuetify'
import { VCalendar } from 'vuetify/labs/VCalendar'

export default {
  components: {
    MenuBanner, HeaderComponent, VCalendar, FooterComponent
  },
  data: () => ({
    type: 'month',
    types: ['month', 'week', 'day'],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { title: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
      { title: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      { title: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
      { title: 'Mon, Wed, Fri', value: [1, 3, 5] },
    ],
    value: [new Date()],
    events: [],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    titles: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    selectedService: null,
    selectedProfessional: null,
    services: ['Corte de Cabelo R$ 40,00', 'Afeitar a Barba R$ 30,00', 'Cabelo + Barba R$ 55,00'],
    professionals: ['João', 'Miguel', 'Fernando'],
  }),
  methods: {
    selectEvent(event) {
      console.log(event)
    },
    goToCheckout() {
      // Encaminhar para o checkout com os dados selecionados
      const selectedData = {
        date: this.value,
        service: this.selectedService,
        professional: this.selectedProfessional,
      };
      console.log(selectedData);
      // Aqui você pode implementar a navegação para a tela de checkout ou executar qualquer outra ação necessária
    },
    getEvents({ start, end }) {
      const events = []

      const min = start
      const max = end
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 20)

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 900000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          title: this.titles[this.rnd(0, this.titles.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          allDay: !allDay,
        })
      }

      this.events = events
    },
    getEventColor(event) {
      return event.color
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
  mounted() {
    const adapter = useDate()
    this.getEvents({ start: adapter.startOfDay(adapter.startOfMonth(new Date())), end: adapter.endOfDay(adapter.endOfMonth(new Date())) })
  },
}
</script>
