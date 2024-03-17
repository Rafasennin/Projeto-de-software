<template>
  <HeaderComponent />
  <BannerComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeaderComponent from '../components/HeaderComponent.vue';
import BannerComponent from '../components/Banner.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent, BannerComponent
  },
});
</script>
