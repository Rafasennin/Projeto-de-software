
<template>
  <v-container>
    <div v-if="loginStatus" class="d-flex justify-end">
      <v-btn color="red-darken-2" @click="logOut">
        <v-icon icon="mdi-arrow-left" start></v-icon>
        Logout
      </v-btn>
    </div>
    <div v-else class="d-flex justify-end">
      <v-btn color="green-darken-2" @click="singIn">
        Login
        <v-icon icon="mdi-arrow-right" end></v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import EventBus from '@/components/EventBus'

export default {
  name: 'LoginComponent',

  computed: {
    loginStatus() {
      return EventBus.isAuthenticated;
    }
  },
   
  
  methods: {
    singIn() {
      this.$router.push({
        name: 'login',
        query: {

        }
      })
    },

    logOut() {
      this.$router.push('/')
      EventBus.isAuthenticated = false;
    }
  }
}
</script>