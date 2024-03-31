// EventBus.js
import { reactive } from 'vue';

// Criar um objeto Vue reativo para ser o EventBus
const EventBus = reactive({
  isAuthenticated: false, // Inicialmente, definimos como false
});

export default EventBus;
