<template>
  <div>
    <img src="../../assets/logo.png">
    <div class="layout-view">
      <form
        class="container"
        @submit.prevent="submit"
      >
        <div>
          <input
            v-model="email"
            type="email"
            placeholder="E-mail"
          >
        </div>

        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
          >
        </div>

        <div>
          <button
            class="primary"
            type="submit"
          >
            Logar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthSignIn',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push({ name: 'home.container' })
      }
    })
  },

  methods: {
    submit() {
      const { email, password } = this
      if (email !== '' && password !== '') {
        this.$auth.signInWithEmailAndPassword(email, password)
      }
    }
  }
}
</script>

<style>
form {
  padding: 20px;
}
input[type="email"], input[type="password"], .container button {
  width: 100%;
}
.container div {
  margin-bottom: 25px;
}
.container div:last-of-type {
  margin-bottom: -10px;
}
</style>
