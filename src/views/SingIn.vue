<template>
    <v-container class="d-flex align-center bg-grey-lighten-1 justify-center h-100">
        <v-card elevation="10" width="320" height="320" class="d-flex align-center">
            <v-sheet class="mx-auto" width="300">
                <v-form ref="form" fast-fail @submit.prevent>
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail"></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" label="Senha"></v-text-field>

                    <v-btn class="mt-2" color="success" type="submit" block @click="validate">Logar</v-btn>
                    <v-btn class="mt-2" color="primary" type="submit" block @click="registerUser">Cadastrar</v-btn>
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
                const emailValid = this.emailRules.every(rule => rule(this.email) === true);
                if (emailValid) {
                    const emailExists = this.checkEmailExists(this.email);
                    if (emailExists) {
                        const passwordValid = this.passwordRules.every(rule => rule(this.password) === true);
                        if (passwordValid) {
                            // Autenticado com sucesso, redirecionar para a página de login
                            this.$router.push("/");
                            // Disparar o evento isAuthenticated para true
                            EventBus.isAuthenticated = true;
                            console.log("Valor de isAuthenticated:", EventBus.isAuthenticated);
                        } else {
                            // Senha inválida
                            alert('Senha inválida. Por favor, verifique as regras de senha.');
                        }
                    } else {
                        // E-mail não cadastrado
                        alert('Usuário não cadastrado, por favor cadastre-se.');
                    }
                } else {
                    // E-mail inválido
                    alert('E-mail inválido. Por favor, verifique o e-mail inserido.');
                }
            }
        },
        checkEmailExists(email) {
            // Verifica se o e-mail já está armazenado no LocalStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            return users.some(user => user.email === email);
        },
        registerUser() {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (this.email && this.password) {
                const emailValid = this.emailRules.every(rule => rule(this.email) === true);
                if (emailValid) {
                    const passwordValid = this.passwordRules.every(rule => rule(this.password) === true);
                    if (passwordValid) {
                        // Verifica se o e-mail já existe antes de registrar
                        const emailExists = this.checkEmailExists(this.email);
                        if (!emailExists) {
                            users.push({ email: this.email, password: this.password });
                            localStorage.setItem('users', JSON.stringify(users));
                            alert('Usuário cadastrado com sucesso!');
                        } else {
                            alert('Este e-mail já está cadastrado.');
                        }
                    } else {
                        alert('Senha inválida. Por favor, verifique as regras de senha.');
                    }
                } else {
                    alert('E-mail inválido. Por favor, verifique o e-mail inserido.');
                }
            } else {
                alert('Os campos de e-mail e senha devem ser preenchidos corretamente.');
            }
        },
    }
}
</script>
