<template>
    <v-container>
      <v-layout class="overflow-visible" style="height: 70px;">
      <v-bottom-navigation class="bg-grey h-100" mode="shift">
        <v-btn>
          <v-icon>mdi-content-cut</v-icon>
         <router-link to="/"><h1>Serviços</h1></router-link> 
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-account-tie</v-icon>
          <router-link to="/profissionais"><h1>Profissionais</h1></router-link>  
        </v-btn>
  
        <v-btn>
          <v-icon>mdi-calendar</v-icon>
          <router-link to="/agenda"><h1>Agenda</h1></router-link> 
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
    </v-container>
  </template>
  
  <script>
  
  export default ({
  name: 'MenuBanner',

});
  </script>