<template>
  <v-container>
    <v-app-bar :elevation="2" :height="100">
      <v-img :width="auto" aspect-ratio="16/9" cover
       src="../assets/Header_logo.jpeg">
      </v-img>
    </v-app-bar>

    <v-banner
    color="pink-darken-1"
    icon="mdi-information-outline"
    lines="two"
  >
    <v-banner-text class="text-black text-h5">
    "Cortes e Navalhas" proporciona cortes e barbas excepcionais, 
    unindo tradição artesanal e modernidade, com barbeiros experientes 
    que garantem uma experiência personalizada e revitalizante para os clientes.
    </v-banner-text>
  </v-banner>

    <v-layout class="overflow-visible" style="height: 70px;">
    <v-bottom-navigation class="bg-grey h-100" mode="shift">
      <v-btn>
        <v-icon>mdi-content-cut</v-icon>
        <h1>Serviços</h1>
      </v-btn>

      <v-btn>
        <v-icon>mdi-account-tie</v-icon>
        <h1>Profissionais</h1>
      </v-btn>

      <v-btn>
        <v-icon>mdi-calendar</v-icon>
        <h1>Agenda</h1>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'HeaderComponent',

  data: () => ({
   
    
  }),
}
</script>
