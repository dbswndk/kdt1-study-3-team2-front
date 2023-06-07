<template>
    <v-container>
        <v-card class="v-color-picker__alpha">
            <v-text-field label="email" placeholder="exmaple@test.com" v-model="email"></v-text-field>
            <v-text-field label="password" v-model="password"></v-text-field>
            <v-container class="align-center">
                <v-btn @click="goHome">cancel</v-btn>
                <v-btn @click="tryLogin">Login</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
import {mapActions} from "vuex";

const accountModule = 'accountModule'

export default {
  name: "AccountLoginPage",
  data() {
    return {
      email: "test@test.com",
      password: "password1",
    }
  },
  methods: {
    ...mapActions(accountModule, ["requestLogin"]),
    goHome() {
      this.$router.push('/')
    },
    async tryLogin() {
      const {email, password} = this
      await this.requestLogin({email, password})
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>