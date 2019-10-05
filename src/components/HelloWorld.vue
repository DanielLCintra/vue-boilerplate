<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Bem vindo a um novo projeto vue
        </h1>
        <p class="subheading font-weight-regular">
          Este é um boilerplate criado para facilitar o inicio de desenvolvimento de um projeto.
          Já inclui algumas bibliotecas essenciais que serão listadas abaixo e já está integrado
          ao vuetify.
          Além bibliotecas, possui algumas configurações auxiliares, como padrão de eslint, source-maps do
          vue para achar erros mais facilmente, já está preparado para ser uma pwa e com as configurações necessárias para ser publicado no heroku (opcional).
        </p>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        <h2 class="headline font-weight-bold mb-3">Bibliotecas</h2>

        <v-layout justify-center>
          <a
            v-for="(eco, i) in libraries"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    libraries: [
      {
        text: 'Vue.js',
        href: 'https://vuejs.org/'
      },
      {
        text: 'Vuetify',
        href: 'https://https://vuetifyjs.com'
      },
      {
        text: 'Vuex',
        href: 'https://vuex.vuejs.org/'
      },
      {
        text: 'Vue Router',
        href: 'https://router.vuejs.org/'
      },
      {
        text: 'Vue Avatar',
        href: 'https://eliep.github.io/vue-avatar/'
      },
      {
        text: 'localforage',
        href: 'https://github.com/localForage/localForage'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ]
  })
}
</script>
