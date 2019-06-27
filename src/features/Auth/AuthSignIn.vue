<template>
  <v-layout
    align-center
    justify-center
  >
    <toast
      ref="toast"
      :type="toastType"
    />

    <v-flex
      xs12
    >
      <v-container
        style="position: relative;top: 13%;"
        class="text-xs-center"
      >
        <v-card flat>
          <v-card-title primary-title>
            <img src="../../assets/logo.png">
          </v-card-title>

          <v-card-text>
            <v-text-field
              v-model="company"
              prepend-icon="store_mall_directory"
              name="company"
              label="Empresa"
              color="secondary"
              required
              :error="error_company"
              :error-messages="error_messages_company"
            />

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
          </v-card-actions>
        </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
import ToastType from '../../support/ToastType'

export default {
  name: 'AuthSignIn',

  data() {
    return {
      ToastType,
      email: null,
      password: null,
      company: null,
      loading: false,
      notificationMessage: {
        message: 'Preencha os dados para fazer login'
      },
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
        this.notificate('Preencha os campos obrigatórios para fazer login.')
        this.loading = false
        return
      }

      const { email, password } = this
      if (email !== '' && password !== '') {
        this.$auth.signInWithEmailAndPassword(email, password)
      }
    },

    validateForm() {
      this.clearErrorMessages()
      let valueReturn = true

      if (this.company === '' || this.company === null) {
        this.error_company = true
        this.error_messages_company.push('Obrigatório')
        valueReturn = false
      }

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
.theme--light.v-sheet {
  background-color: #d7dee4 !important;
}
</style>
