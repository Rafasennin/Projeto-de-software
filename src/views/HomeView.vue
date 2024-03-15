<template>
  <HeaderComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HeaderComponent from '../components/HeaderComponent.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    HeaderComponent
  },
});
</script>
