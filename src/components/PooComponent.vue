<template>
    <v-container class="d-flex justify-center flex-wrap">
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="carType in carTypes" :key="carType">
          <v-card class="ma-5 pa-5 bg-blue text-white">
            <h2 class="d-flex justify-center">{{ carType }}</h2>
            <v-divider class="ma-2 " color="black"></v-divider>
            <div class="mt-3">
              <h3 class="mb-2 text-black">Propriedades</h3>
              <div class="property" v-for="prop in vehicleProperties" :key="prop">{{ prop }}</div>
              <div class="property" v-for="prop in carProperties[carType]" :key="prop">{{ prop }}</div>
            </div>
            <v-divider class="ma-2" color="black"></v-divider>
            <h3 class="mb-2 text-black">Métodos</h3>
            <div class="mt-3">
              <div class="mb-1" v-for="method in vehicleMethods" :key="method">{{ method }}</div>
              <div class="mb-1" v-for="method in carMethods[carType]" :key="method">{{ method }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'PooComponent',
  
    data() {
      return {
        vehicleProperties: ['Cor', 'Tamanho'],
        vehicleMethods: ['Mover()', 'Girar()'],
        carTypes: ['Carro Esportivo', 'Carro de Luxo', 'Carro Compacto', 'Carro Elétrico'],
        carProperties: {
          'Carro Esportivo': ['Potência', 'Velocidade Máxima'],
          'Carro de Luxo': ['Conforto', 'Equipamentos'],
          'Carro Compacto': ['Consumo', 'Espaço'],
          'Carro Elétrico': ['Autonomia', 'Bateria']
        },
        carMethods: {
          'Carro Esportivo': ['Acelerar()', 'Frear()'],
          'Carro de Luxo': ['AbrirPorta()', 'FecharPorta()'],
          'Carro Compacto': ['Estacionar()', 'AbrirPortaMalas()'],
          'Carro Elétrico': ['Carregar()', 'Descarregar()']
        }
      }
    }
  }
  </script>
  