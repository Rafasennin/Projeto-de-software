<template>
    <HeaderComponent />
    <MenuBanner />
    <v-container>
      <v-card class="mx-auto" max-width="auto">
        <v-row dense class="d-flex justify-center">
          <h1>Comprovante de Pagamento e Agendamento</h1>
        </v-row>
      </v-card>
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
    data() {
      return {
        
      }
    },
   
  }
  </script>
  