<template>
  <v-layout
    align-center
    justify-center
  >
    <v-flex
      xs12
    >
      <v-container
        style="
          display: flex;
          justify-content: center;
          flex-flow: row wrap;
          position: relative;
          top: 6em !important;
          padding-left: 0px;
          padding-right: 0px;
          z-index: 99;
        "
        class="text-xs-center"
      >
        <v-card
          id="signin"
          flat
        >
          <v-card-title primary-title>
            <img src="../../assets/logo.png">
          </v-card-title>

          <v-card-text>
            <v-text-field
              v-model="email"
              prepend-icon="person"
              name="email"
              label="E-mail"
              color="secondary"
              required
              :error="error_email"
              :error-messages="error_messages_email"
            />

            <v-text-field
              v-model="password"
              prepend-icon="lock"
              name="Password"
              label="Senha"
              type="password"
              color="secondary"
              required
              :error="error_password"
              :error-messages="error_messages_password"
            />
          </v-card-text>

          <div class="notification-message">
            <span
              v-for="(message, key) in notificationMessage"
              :key="key"
              class="message-item"
            >
              {{ message }} <br>
            </span>
          </div>

          <v-card-actions>
            <v-layout
              row
              wrap
            >
              <v-btn
                primary
                large
                block
                :loading="loading"
                color="secondary"
                @click.prevent="submit"
              >
                Entrar
              </v-btn>

              <v-btn
                primary
                large
                block
                color="accent"
                @click="$router.push({ name: 'auth.signup' })"
              >
                Cadastrar
              </v-btn>

              <v-flex
                xs12
                class="py-2"
              >
                <div
                  class="text-xs-center forgot-password"
                  @click="resetPassword()"
                >
                  esqueci minha senha
                </div>
              </v-flex>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AuthSignIn',

  data() {
    return {
      email: null,
      password: null,
      company: null,
      loading: false,
      notificationMessage: [
        'Preencha os dados para fazer login'
      ],
      error_email: false,
      error_messages_email: [],
      error_password: false,
      error_messages_password: [],
      error_company: false,
      error_messages_company: []
    }
  },

  created() {
    setTimeout(() => {
      this.notificationMessage = []
    }, 3000)
  },

  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      if (user) {
        this.loading = false
        this.$router.push({ name: 'home.container' })
      }
    })
  },

  methods: {
    submit() {
      this.loading = true

      if (!this.validateForm()) {
        this.loading = false
        this.notificate('Preencha os campos obrigatórios para fazer login.')
        return
      }

      const { email, password } = this
      if (email !== '' && password !== '') {
        this.$auth.signInWithEmailAndPassword(email, password)
          .then(() => {
            this.notificate('Login realizado com sucesso.')

            setTimeout(() => {
              this.$router.push({ name: 'home.list' })
            }, 3000)
          })
          .catch((error) => {
            this.notificate(error.message)
          })
          .finally(() => {
            this.loading = false
          })
      }
    },

    validateForm() {
      this.clearErrorMessages()
      let valueReturn = true

      if (this.email === '' || this.email === null) {
        this.error_email = true
        this.error_messages_email.push('Obrigatório')
        valueReturn = false
      }

      if (this.password === '' || this.password === null) {
        this.error_password = true
        this.error_messages_password.push('Obrigatório')
        valueReturn = false
      }

      return valueReturn
    },

    notificate(message) {
      this.notificationMessage.push(message)

      setTimeout(() => {
        this.notificationMessage = []
      }, 3000)
    },

    clearErrorMessages() {
      this.error_email = false
      this.error_messages_email = []
      this.error_password = false
      this.error_messages_password = []
      this.error_company = false
      this.error_messages_company = []
    }
  }
}
</script>

<style>
.v-card__title.v-card__title--primary {
  display: flex;
  justify-content: center;
}
.theme--light.v-sheet#signin {
  background-color: transparent !important;
}
.text-xs-center.forgot-password {
  margin-top: 1em;
  font-size: 15px;
}
</style>
