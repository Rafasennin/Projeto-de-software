<template>
    <v-footer class="d-flex flex-column">
      <div class="bg-grey d-flex w-100 align-center px-4">
        <strong>Descubra mais sobre nossa barbearia!</strong>
  
        <v-spacer></v-spacer>
  
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon.icoo"
          :href="icon.src"
          class="mx-4"
          size="small"
          variant="plain"
          target="_blank"
        ></v-btn>
      </div>
  
      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Cortes & Navalhas</strong>
      </div>
    </v-footer>
  </template>

  <script>
    export default {
        name: 'FooterComponent',
      data: () => ({
        icons: [
        { icoo:'mdi-facebook', src:'https://www.facebook.com'},
        { icoo:'mdi-twitter', src:'https://twitter.com'},
        { icoo:'mdi-linkedin', src:'https://www.linkedin.com'},
        { icoo:'mdi-instagram', src:'https://www.instagram.com'},
        ],
      }),
    }
  </script>
