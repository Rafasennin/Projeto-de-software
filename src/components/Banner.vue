<template>
    <v-container>
        <v-dialog v-model="dialog" max-width="600px">
            <v-card>
                <v-img :src="selectedCard.src" aspect-ratio="16/9" cover></v-img>
                <v-card-title>{{ selectedCard.title }}</v-card-title>
                <v-card-text>
                    <strong>Descrição desse serviço: </strong> <br><br>
                    {{ selectedCard.text }}
                    
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-card class="mx-auto" max-width="auto">
            <v-container fluid>
                <v-row dense class="d-flex justify-center">
                    <v-col v-for="card in cards" :key="card.title" cols="12" sm="6" md="4" lg="3">
                        <v-card @click="openModal(card)">
                            <v-img :src="card.src" class="align-end"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover>
                                <v-card-title class="text-white" v-text="card.title"></v-card-title>
                            </v-img>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn color="surface-variant" icon="mdi-heart" size="small" variant="text"></v-btn>

                                <v-btn color="surface-variant" icon="mdi-bookmark" size="small" variant="text"></v-btn>

                                <v-btn color="surface-variant" icon="mdi-share-variant" size="small"
                                    variant="text"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>

export default {
    name: 'BannerComponent',

    data: () => ({
        dialog: false,
        selectedCard: {},
        cards: [
            { title: 'Barba', 
              src: require('../assets/barba.jpg'), 
              flex: 12,
              text: 'Na nossa barbearia, dominamos a arte de esculpir e estilizar as mais diversas barbas. Desde o clássico e elegante (stubble) até o imponente (full beard), nossos especialistas são treinados para proporcionar o estilo de barba que melhor se adequa ao formato do seu rosto e à sua personalidade. Oferecemos serviços especializados de barbearia que incluem cortes precisos, contornos definidos e tratamentos de barba para garantir que você saia com uma aparência impecável e confiante.'
 
         },
            { title: 'Cabelo', 
              src: require('../assets/cabelo_black.jpg'), 
              flex: 6,
              text:'Nossa barbearia é reconhecida por oferecer uma variedade de cortes de cabelo que abrangem desde os clássicos até os mais modernos. Seja você um adepto dos cortes tradicionais ou um entusiasta das últimas tendências, nossos cabeleireiros experientes estão preparados para atender às suas necessidades. Oferecemos consultas personalizadas para ajudá-lo a escolher o corte que melhor realça seus traços e complementa seu estilo de vida.'
             },
            { title: 'Cabelo + Barba', 
              src: require('../assets/barba_cabelo.jpg'), 
              flex: 6,
              text:'Especializados em combinar cortes de cabelo e estilos de barba, nossa barbearia é o destino ideal para aqueles que desejam uma aparência completa e polida. Nossos profissionais talentosos são treinados para criar harmonia entre o cabelo e a barba, garantindo que ambos estejam alinhados com sua estética pessoal. Dos cortes modernos aos estilos clássicos de barba, oferecemos serviços completos que refletem sua individualidade e ressaltam sua confiança.'
             },
        ],

    }),
    methods: {
    openModal(card) {
      this.selectedCard = card;
      this.dialog = true;
    },
  },
}
</script>