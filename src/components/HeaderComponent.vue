<template>
  <v-container>
    <v-app-bar :elevation="2" :height="100">
      <v-img :width="auto"  aspect-ratio="16/9" cover src="../assets/Banner_cortes_&_navalhas.png">
      </v-img>
    </v-app-bar>

    <v-banner  color="pink-darken-1" icon="mdi-information-outline" lines="two">
      <h3 class="text-black text-body-1 ">
        "Cortes e Navalhas" proporciona cortes e barbas excepcionais,
        unindo tradição artesanal e modernidade, com barbeiros experientes
        que garantem uma experiência personalizada e revitalizante para os clientes.
      </h3>
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
