<template>
  <v-container>
    <a
      href="#"
      @click.prevent="$router.push({name: 'auth.signin'})"
    >
      <v-icon large>arrow_back</v-icon>
    </a>

    <v-card flat>
      <v-card-title primary-title>
        <h3 class="headline mb-0">
          Cadastrar
        </h3>
      </v-card-title>

      <v-card-text>
        <v-layout
          row
          wrap
        >
          <v-flex xs12>
            <v-text-field
              v-model="user.name"
              name="name"
              label="Nome"
              color="secondary"
              required
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              v-model="user.email"
              type="email"
              name="email"
              label="E-mail"
              color="secondary"
              required
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              v-model="user.document"
              :mask="'###.###.###-##'"
              type="text"
              name="document"
              label="CPF"
              color="secondary"
              required
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              v-model="user.company"
              name="company"
              label="Empresa"
              color="secondary"
              required
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              v-model="user.password"
              type="password"
              name="password"
              label="Senha"
              color="secondary"
              required
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              v-model="confirmPassword"
              type="password"
              name="password"
              label="Confirme a senha"
              color="secondary"
              required
            />
          </v-flex>
        </v-layout>
      </v-card-text>

      <v-card-actions>
        <v-btn
          primary
          large
          block
          :loading="loading"
          color="secondary"
          @click="handleSubmit()"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import sha1 from 'js-sha1'

export default {
  name: 'AuthSignUp',

  data: () => ({
    loading: false,
    confirmPassword: '',
    user: {
      name: null,
      email: null,
      password: null,
      company: null,
      document: null
    }
  }),

  methods: {
    handleSubmit() {
      this.loading = true

      // this.$db.ref(`users/${this.user.document}`).push(this.user)

      this.$db.ref(`users/${sha1(this.user.email)}`)
        .set(this.user)
        .then(() => {
          alert('Usuário criado')
        })

      this.$db.ref(`companies/${this.user.company}`)
        .set({ name: this.user.company })
        .then(() => {
          alert('Empresa criada')
        })

      this.$auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          alert('Usuário criado com sucesso!')
          this.$auth.signOut()
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.')
          } else {
            alert(errorMessage)
          }
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
      return true
    }
  }
}
</script>

<style>

</style>
