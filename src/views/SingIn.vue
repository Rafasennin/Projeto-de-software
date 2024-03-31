<template>
    <v-container class="d-flex align-center bg-grey-lighten-1 justify-center h-100">
        <v-card elevation="10" width="320" height="320" class="d-flex align-center">
        <v-sheet class="mx-auto" width="300">
            <v-form ref="form" fast-fail @submit.prevent>
                <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
                <v-text-field v-model="password" :rules="passwordRules" label="Senha"></v-text-field>

                <v-btn class="mt-2" color="success" type="submit" block @click="validate">Logar</v-btn>
                <v-btn class="mt-2" color="primary" type="submit" block @click="signIn">Cadastrar</v-btn>
            </v-form>
        </v-sheet>
    </v-card>
    </v-container>
</template>


<script>
import EventBus from "@/components/EventBus";
export default {
    data: () => ({
        email: '',
        emailRules: [
            value => {
                if (value) return true

                return 'E-mail is requred.'
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true

                return 'O E-mail deve ser válido.'
            },
        ],
        password: '',
        passwordRules: [
            value => !!value || 'A senha é necessária.',
            value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) || `
                A senha deve conter ter ao menos 8 caracteres, uma 
                letra maiúscula, uma minúscula e um número.
            `
        ]
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                // Validação do e-mail
                const emailExists = this.checkEmailExists(this.email);
                const passwordExists = this.checkPasswordExists(this.password);
                if (emailExists && passwordExists) {
                    // Autenticado com sucesso, redirecionar para a página de login
                   
                    this.$router.push("/");
                    // Disparar o evento isAuthenticated para true
                    EventBus.isAuthenticated = true;
                    console.log("Valor de isAuthenticated:", EventBus.isAuthenticated);
                   

                } else {
                    // E-mail não cadastrado
                    alert('Usuario não cadastro, por favor cadastrar');
                }
            }
        },
        checkEmailExists(email) {
            // Verifica se o e-mail já está armazenado no LocalStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            return users.some(user => user.email === email);
        },
        checkPasswordExists(password) {
            // Verifica se a senha já está armazenada no LocalStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            return users.some(user => user.password === password);
        },
        registerUser() {
            // Registra um novo usuário no LocalStorage
            const newUser = { email: this.email, password: this.password };
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Usuário cadastrado com sucesso!');
        },
        signIn() {
            // Se o e-mail não existir no LocalStorage, pode prosseguir com o cadastro
            this.registerUser();
        }
    }
}
</script>