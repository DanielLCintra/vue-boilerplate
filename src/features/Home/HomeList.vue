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
      <h1 class="title">
        <span class="title-text">Olá, </span> <span class="title-name">{{ user.name.split(' ')[0] }}</span>
      </h1>

      <h3 class="subtitle">
        Você tem {{ services.length }} serviços vencendo hoje:
      </h3>

      <loading
        :visible="loading"
      />

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
export default {
  name: 'HomeList',

  props: {
    id: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    services: [],
    user: {
      name: '',
      company: ''
    }
  }),

  computed: {
    loading() {
      return !!this.services.length === 0
    }
  },

  watch: {
    user(value) {
      this.$db.ref(`companies/${value.company}/services`).on('value', (snapshot) => {
        this.services = snapshot.val()
      })
    }
  },

  mounted() {
    this.$db.ref(`users/${this.id}`).once('value', (snapshot) => {
      this.user = snapshot.val()
      this.$bus.$emit('user-loaded', this.user)
    })
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
</style>
