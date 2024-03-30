<template>
  <HeaderComponent />
  <v-container>
  <v-card class="mx-auto" max-width="auto">
  <HeaderComponentText />
  <MenuBanner />
      <v-row dense class="d-flex justify-center">
        <h1>Serviços</h1>
      </v-row>
    </v-card>
  </v-container>
  <BannerComponent />
  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components

import MenuBanner from '../components/MenuBanner.vue'
import HeaderComponent from '../components/HeaderComponent.vue';
import BannerComponent from '../components/Banner.vue';
import FooterComponent from '../components/Footer.vue'
import HeaderComponentText from '../components/HeaderComponentText.vue'


export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent, BannerComponent, MenuBanner,FooterComponent, HeaderComponentText
  },
});
</script>
