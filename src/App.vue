<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push({ name: 'auth.signin' })
      } else {
        this.$router.push({ name: 'home.list' })
      }
    })
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
