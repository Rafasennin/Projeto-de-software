<template>
  <v-container>
    <v-layout class="overflow-visible" style="height: 70px;">
      <v-bottom-navigation class="bg-grey h-100" mode="shift">

        <v-btn :to="linkServicos" class="text-decoration-none">
          <v-icon>mdi-content-cut</v-icon>
          <h1  class="text-h6 text-sm-h5">Serviços</h1 >
        </v-btn>

        <v-btn :to="linkProfissionais" class="text-decoration-none">
          <v-icon>mdi-account-tie</v-icon>
          <h1 class="text-h6 text-sm-h5">Profissionais</h1>
        </v-btn>

        <v-btn :to="linkAgenda" class="text-decoration-none">
          <v-icon>mdi-calendar</v-icon>
          <h1  class="text-h6 text-sm-h5">Agenda</h1>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      linkServicos: "/",
      linkProfissionais: "/profissionais",
      linkAgenda: "/agenda"
    };
  }
};
</script>
