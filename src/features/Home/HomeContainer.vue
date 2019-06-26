<template>
  <div>
    <h1>Esta é a tela principal</h1>

    <button
      class="primary"
      style="width: 100%"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: 'HomeContainer',

  methods: {
    logout() {
      this.$auth.signOut()
    }
  }
}
</script>

<style>

</style>
