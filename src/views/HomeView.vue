<template>
  <HeaderComponent />
  <MenuBanner />
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
export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent, BannerComponent, MenuBanner,FooterComponent
  },
});
</script>
