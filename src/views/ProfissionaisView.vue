<template>
  <HeaderComponent />
  <v-container>
    <v-card class="mx-auto" max-width="auto">
      <HeaderComponentText />
      <MenuBanner />
      <v-row dense class="d-flex justify-center">
        <h1>Profissionais</h1>
      </v-row>
    </v-card>
    <v-card class="mx-auto" max-width="auto">
      <v-container fluid>
        <v-row dense class="d-flex justify-center">
          <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3">
            <v-card @click="openModal(card)">
              <v-img :src="card.src" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px" cover>
                <v-card-title class="text-white" v-text="card.title"></v-card-title>
              </v-img>

              <v-card-actions>
                <v-btn color="primary" size="small" variant="text">Saiba mais</v-btn>
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
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-img :src="selectedCard.src" aspect-ratio="16/9" cover></v-img>
        <v-card-title>{{ selectedCard.title }}</v-card-title>
        <v-card-text>
          <strong>Descrição do Profissional: </strong><br><br>
          {{ selectedCard.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import MenuBanner from '../components/MenuBanner.vue'
import FooterComponent from '../components/Footer.vue'
import HeaderComponentText from '../components/HeaderComponentText.vue'

export default {
  components: {
    MenuBanner, HeaderComponent, FooterComponent, HeaderComponentText
  },
  data() {
    return {
      cards: [
        {
          title: 'João',
          src: require('../assets/barber_1.jpg'),
          flex: 12,
          description: 'João é um profissional experiente com uma paixão por criar cortes de cabelo e estilos de barba que refletem a individualidade de cada cliente. Ele se especializa em cortes modernos e precisos, sempre garantindo um serviço de alta qualidade.'
        },
        {
          title: 'Miguel',
          src: require('../assets/barber_2.jpg'),
          flex: 6,
          description: 'Miguel é um barbeiro talentoso com uma habilidade excepcional para criar estilos de barba que complementam os traços faciais de seus clientes. Ele é conhecido por sua atenção aos detalhes e sua capacidade de transformar até mesmo a barba mais desafiadora em uma obra-prima.'
        },
        {
          title: 'Fernando',
          src: require('../assets/barber_3.avif'),
          flex: 6,
          description: 'Fernando é um cabeleireiro e barbeiro versátil que domina uma ampla gama de estilos e técnicas. Ele é especializado em cortes clássicos e modernos, e tem o talento de criar looks elegantes e contemporâneos que deixam seus clientes satisfeitos.'
        },
      ],
      dialog: false,
      selectedCard: {},
    }
  },
  methods: {
    openModal(card) {
      this.selectedCard = card;
      this.dialog = true;
    },
  },
}
</script>
