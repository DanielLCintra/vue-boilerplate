<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import sha1 from 'js-sha1'

export default {
  name: 'App',

  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push({ name: 'auth.signin' })
      } else {
        this.$db.ref(`users/${sha1(user.email)}`).once('value', (snapshot) => {
          this.setCurrentUser(snapshot.val())
        })
        this.$router.push({ name: 'home.list' })
      }
    })
  },

  methods: {
    ...mapActions('auth', ['setCurrentUser'])
  }
}
</script>

<style>
#app {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #d7dee4;
  top: 0;
  left: 0;
}
</style>
