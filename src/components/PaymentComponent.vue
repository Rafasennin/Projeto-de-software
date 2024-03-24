<template>
    <v-card>
        <v-toolbar color="bg-grey-lighten-1" class="d-flex justify-center align-center text-center">
            <v-toolbar-title>Escolha a Forma de Pagamento</v-toolbar-title>
            <template v-slot:extension>
                <v-tabs v-model="currentItem" fixed-tabs>
                    <v-tab v-for="item in items" :key="item" :value="'tab-' + item">
                        {{ item }}
                    </v-tab>
                    <v-list class="bg-grey-lighten-3">
                        <v-list-item v-for="item in more" :key="item" @click="addItem(item)">
                            {{ item }}
                        </v-list-item>
                    </v-list>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-window v-model="currentItem">
            <v-window-item v-for="item in items.concat(more)" :key="item" :value="'tab-' + item">

                <!--Crédito e Débito -->
                <v-card flat
                    v-if="currentItem === 'tab-Crédito' && item === 'Crédito' || currentItem === 'tab-Débito' && item === 'Débito'">
                    <v-card-text>
                        <v-row class="ma-5">
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="creditCard.cardNumber" label="Número do Cartão" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="creditCard.cardName" label="Nome no Cartão" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="creditCard.expiryDate" label="Data de Validade" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="creditCard.cvv" label="CVV" outlined></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row justify="center">
                            <v-btn color="primary" @click="processPayment" class="mb-10">Pagar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!--PIX -->
                <v-card flat v-else-if="currentItem === 'tab-PIX' && item === 'PIX'">
                    <v-card-text>
                        <v-row class="ma-5 d-flex justify-center">
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="pixKey" label="Chave PIX" outlined></v-text-field>
                            </v-col>
                            <!-- Adicione os campos específicos do PIX aqui -->
                        </v-row>
                        <v-row justify="center">
                            <v-btn color="primary" @click="processPayment" class="mb-10">Pagar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!--PayPal -->
                <v-card flat v-else-if="currentItem === 'tab-PayPal' && item === 'PayPal'">
                    <v-card-text>
                        <v-row class="ma-5 d-flex justify-center">
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="paypalEmail" label="E-mail do PayPal" outlined></v-text-field>
                            </v-col>
                            <!-- Adicione os campos específicos do PayPal aqui -->
                        </v-row>
                        <v-row justify="center">
                            <v-btn color="primary" @click="processPayment" class="mb-10">Pagar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>

                <!--Boleto -->
                <v-card flat v-else-if="currentItem === 'tab-Boleto' && item === 'Boleto'">
                    <v-card-text>
                        <v-row class="ma-5 d-flex justify-center">
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="boletoName" label="Nome Completo" outlined></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field v-model="boletoCPF" label="CPF" outlined></v-text-field>
                            </v-col>
                            <!-- Adicione os campos específicos do boleto aqui -->
                        </v-row>
                        <v-row justify="center">
                            <v-btn color="primary" @click="processPayment" class="mb-10">Pagar</v-btn>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
    </v-card>
</template>

<script>
export default {
    name: 'PaymentComponent',
    data: () => ({
        currentItem: 'tab-Web',
        items: [
            'Crédito', 'Débito', 'PIX', 'PayPal', 'Boleto'
        ],

        text: 'Incluir o card.',
        creditCard: {
            cardNumber: '',
            cardName: '',
            expiryDate: '',
            cvv: ''
        },

        paypalEmail: '',
        pixKey: '',
        boletoName: '',
        boletoCPF: ''
    }),

    methods: {
        addItem(item) {
            this.$nextTick(() => { this.currentItem = 'tab-' + item })
        },

        processPayment() {
            if (this.cardNumber != "" && this.cardName != "" && this.cvv != "" && this.expiryDate != "") {
                //Rota
                this.$router.push({
                    name: 'comprovante',
                    query: this.creditCard
                });
            }
        }
    },
}
</script>