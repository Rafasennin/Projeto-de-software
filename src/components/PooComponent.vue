<template>
    <v-container class="d-flex justify-center flex-wrap">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="ma-5 pa-5 bg-blue text-white">
            <h2 class="d-flex justify-center">Veículo</h2>
            <v-divider class="ma-2 " color="black"></v-divider>
            <div class="properties">
              <h3 class="mb-2 text-black">Propriedades</h3>
              <div class="property" v-for="(value, key) in vehicleProperties" :key="key">
                <span>{{ key }}:</span> {{ value }}
              </div>
            </div>
            <v-divider class="ma-2" color="black"></v-divider>
            <h3 class="mb-2 text-black">Métodos</h3>
            <div class="methods">
              <div class="method" v-for="method in vehicleMethods" :key="method">{{ method }}</div>
            </div>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="4" v-for="(carType, index) in carTypes" :key="index">
          <v-card class="ma-5 pa-5 bg-blue text-white">
            <h2 class="d-flex justify-center">{{ carType }}</h2>
            <v-divider class="ma-2 " color="black"></v-divider>
            <div class="mt-3">
              <h3 class="mb-2 text-black">Propriedades</h3>
              <div class="property" v-for="(value, key) in carProperties[carType]" :key="key">
                <span>{{ key }}:</span> {{ value }}
              </div>
            </div>
            <v-divider class="ma-2" color="black"></v-divider>
            <h3 class="mb-2 text-black">Métodos</h3>
            <div class="mt-3">
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
        vehicleProperties: {
          Cor: "",
          Tamanho: ""
        },
        vehicleMethods: ['Acelerar()', 'Frear()'],
        carTypes: ['Carro Esportivo', 'Carro de Luxo', 'Carro Compacto', 'Carro Elétrico'],
        carProperties: {
          'Carro Esportivo': {
            'Cor': 'Vermelho',
            'Tamanho': 'Médio',
            'Potência': 'Alta',
            'Velocidade Máxima': '300 km/h'
          },
          'Carro de Luxo': {
            'Cor': 'Preto',
            'Tamanho': 'Grande',
            'Conforto': 'Alto',
            'Equipamentos': 'Luxuosos'
          },
          'Carro Compacto': {
            'Cor': 'Azul',
            'Tamanho': 'Pequeno',
            'Consumo': 'Baixo',
            'Espaço': 'Limitado'
          },
          'Carro Elétrico': {
            'Cor': 'Branco',
            'Tamanho': 'Médio',
            'Autonomia': '500 km',
            'Bateria': 'Íon de Lítio'
          }
        },
        carMethods: {
          'Carro Esportivo': ['Acelerar()', 'Frear()', 'AbrirPortaMalas()', 'EstacionarAutomatico()'],
          'Carro de Luxo': ['Acelerar()', 'Frear()','AbrirPortaAutomatico()', 'FecharPortaAutomatico()'],
          'Carro Compacto': ['Acelerar()', 'Frear()','EstacionarAutomatico()', 'AbrirPortaMalas()'],
          'Carro Elétrico': ['Acelerar()', 'Frear()','CarregarBateria()', 'DescarregarBateria()']
        }
      }
    }
  }
  </script>
  