<template>
  <div />
</template>

<script>
export default {
  name: 'AuthSignOff',

  mounted() {
    this.$auth.signOut()
  }
}
</script>

<style>

</style>
