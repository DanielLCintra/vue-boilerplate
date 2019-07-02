<template>
  <v-container
    fluid
    grid-list-lg
  >
    <v-flex
      xs12
      sm10
      md8
      lg6
    >
      <loading
        v-if="!currentUser.name"
        :visible="true"
      />

      <div v-else>
        <h1 class="title">
          <span class="title-text">Olá, </span> <span class="title-name">{{ firstName }}</span>
        </h1>

        <h3 class="subtitle">
          Você tem {{ expiredServices }} serviços vencendo hoje:
        </h3>

        <loading
          :visible="loading"
        />
      </div>

      <br>

      <ul v-if="!loading">
        <li
          v-for="(service, key) in services"
          :key="key"
        >
          {{ service.description }}
        </li>
      </ul>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HomeList',

  data: () => ({
    services: [],
    loading: true
  }),

  computed: {
    ...mapState('auth', ['currentUser']),

    firstName() {
      if (this.currentUser.name) {
        return this.currentUser.name.split(' ')[0]
      }

      return ''
    },

    expiredServices() {
      if (this.services) {
        return this.services.length
      }

      return '0'
    }
  },

  watch: {
    currentUser: {
      handler(value) {
        this.$db.ref(`companies/${value.company}/services`).on('value', (snapshot) => {
          this.services = snapshot.val()
          this.loading = false
        })
      },
      immediate: true
    }
  },

  methods: {
    logout() {
      this.$auth.signOut()
    }
  }
}
</script>

<style>
.title{
  margin-left: 0.7em;;
}
.title-text {
  color: #000;
  font-size: 36px;
  font-weight: bold;
}
.title-name {
  color: #ea932e;
  font-size: 36px;
  font-weight: bold;
}
.subtitle {
  color: #000;
  font-weight: 300;
  margin-top: -1px;
  margin-left: 1em;
}
.v-progress-circular.primary.v-progress-circular--indeterminate {
  margin-top: 6em;
}
</style>
