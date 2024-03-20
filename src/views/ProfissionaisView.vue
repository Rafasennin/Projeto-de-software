<template>
  <HeaderComponent />
  <MenuBanner />
  <v-container>
    <v-card class="mx-auto" max-width="auto">
      <v-row dense class="d-flex justify-center">
        <h1>Profissionais</h1>
      </v-row>
    </v-card>
    <v-card class="mx-auto" max-width="auto">
            <v-container fluid>
                <v-row dense class="d-flex justify-center">
                    <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3">
                    <v-card>
                        <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px" cover>
                            <v-card-title class="text-white" v-text="card.title"></v-card-title>
                        </v-img>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn color="surface-variant" icon="mdi-heart" size="small" variant="text"></v-btn>

                            <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

                            <v-btn color="surface-variant" icon="mdi-share-variant" size="small" variant="text"></v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <FooterComponent />
  </v-container>
</template>


  <script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuBanner from '../components/MenuBanner.vue'
import FooterComponent from '../components/Footer.vue'

export default {
  components: {
    MenuBanner, HeaderComponent, FooterComponent
   },
  data: () => ({
    cards: [
            { title: 'João', src: require('../assets/barber_1.jpg'), flex: 12 },
            { title: 'Miguel', src: require('../assets/barber_2.jpg'), flex: 6 },
            { title: 'Fernado', src: require('../assets/barber_3.avif'), flex: 6 },
        ],
   
    
  }),
}
</script>

