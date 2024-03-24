<template>
  <v-container>
    <v-layout class="overflow-visible" style="height: 70px;">
      <v-bottom-navigation class="bg-grey h-100" mode="shift">

        <v-btn :to="linkServicos" class="text-decoration-none">
          <v-icon>mdi-content-cut</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-block">Serviços</h1>
        </v-btn>

        <v-btn :to="linkProfissionais" class="text-decoration-none">
          <v-icon>mdi-account-tie</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-block">Profissionais</h1>
        </v-btn>

        <v-btn :to="linkAgenda" class="text-decoration-none">
          <v-icon>mdi-calendar</v-icon>
          <h1 class="text-h6 d-none d-sm-inline-block">Agenda</h1>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'MenuBanner',
  data() {
    return {
      linkServicos: "/",
      linkProfissionais: "/profissionais",
      linkAgenda: "/agenda"
    };
  }
};
</script>
