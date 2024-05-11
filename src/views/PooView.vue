<template>
    <HeaderComponent />
    <v-container>
    <v-card class="mx-auto" max-width="auto">
    <HeaderComponentText />
    <MenuBanner />
        <v-row dense class="d-flex justify-center">
          <h2>Programação Orientada a Objeto</h2>
        </v-row>
      </v-card>
    </v-container>
    <PooComponent />
    <FooterComponent />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
  import MenuBanner from '../components/MenuBanner.vue'
  import HeaderComponent from '../components/HeaderComponent.vue';
  import PooComponent from '../components/PooComponent.vue';
  import FooterComponent from '../components/Footer.vue'
  import HeaderComponentText from '../components/HeaderComponentText.vue'
  
  
  export default defineComponent({
    name: 'POO',

    data() {
        return {
          isMdAndUp: false,
        }
    },
  
    components: {
      HeaderComponent, PooComponent, MenuBanner,FooterComponent, HeaderComponentText
    },

  });
  </script>
  