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
  </v-container>
</template>

<script>

export default {
  name: 'HeaderComponent',
  components: {
   
   },
  data: () => ({
   
    
  }),
}
</script>
