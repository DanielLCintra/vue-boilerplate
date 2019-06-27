<template>
  <v-container>
    <v-btn
      primary
      large
      block
      :loading="loading"
      color="secondary"
      @click.prevent="$router.push({name: 'auth.signin'})"
    >
      Voltar
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'AuthSignUp'
}
</script>

<style>

</style>
