<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
        <v-card flat>
          <v-layout>
            <v-flex xs5>
              <avatar
                v-if="currentUser.name"
                :username="currentUser.name"
                :size="90"
                class="ml-3"
              />
            </v-flex>

            <v-flex xs5>
              <v-card-title primary-title>
                <div>
                  <div class="headline">
                    {{ firstName }}
                  </div>

                  <div>
                    {{ currentUser.company }}
                  </div>

                  <div>
                    &nbsp;
                  </div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-card>

        <template
          v-for="(item, itemIndex) in items"
        >
          <v-list-group
            v-if="item.children"
            :key="itemIndex"
            v-model="item.model"
            no-action
            class="list-item-menu"
          >
            <v-list-tile
              slot="activator"
            >
              <v-list-tile-action>
                <v-icon class="menu">
                  {{ item.model ? item.icon : item['icon-alt'] }}
                </v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>
                  <div class="menu-text">
                    {{ item.text }}
                  </div>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :to="child.href"
              :disabled="child.disabled"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content class="ml-4">
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-list-tile
            v-else
            :key="itemIndex"
            :to="item.href"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                <div class="menu-text">
                  {{ item.text }}
                </div>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar-side-icon @click.stop="drawer = !drawer" />

    <router-view />

    <div class="bottom-logo">
      <img
        src="../../assets/logo.png"
        width="150px"
      >
    </div>
  </div>
</template>

<script>
import Avatar from 'vue-avatar'
import { mapState } from 'vuex'

export default {
  name: 'HomeContainer',

  components: {
    Avatar
  },

  data: () => ({
    user: {
      company: null,
      document: null,
      email: null,
      name: null,
      password: null
    },
    drawer: false,
    items: [
      {
        icon: 'house',
        text: 'Principal',
        href: '/home'
      },
      {
        icon: 'build',
        text: 'Serviços',
        href: '/list'
      },
      {
        icon: 'people',
        text: 'Clientes',
        href: '/list'
      },
      {
        icon: 'bar_chart',
        text: 'Relatórios',
        href: '/list'
      },
      {
        icon: 'settings',
        text: 'Configurações',
        href: '/list'
      },
      {
        icon: 'exit_to_app',
        text: 'Sair',
        href: '/signoff'
      }
    ]
  }),

  computed: {
    ...mapState('auth', ['currentUser']),

    firstName() {
      if (this.currentUser.name) {
        return this.currentUser.name.split(' ')[0]
      }

      return ''
    }
  }
}
</script>

<style>
.bottom-logo {
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
  justify-items: center;
  bottom: 20px;
  margin: 0px auto;
  width: 100%;
}
.name {
  display: flex;
  flex-flow: column;
}
.name h4 {
  font-size: 11px;
  font-weight: 300;
}
.v-card.v-sheet.theme--light.white.darken-2 {
  top: 0 !important;
  margin-top: -4px;
  height: 122px;
}
h3.name {
  position: absolute;
  margin-top: 0.7em;
  margin-left: 2.8em;
}
h4.document {
  position: absolute;
  margin-top: 5.4em;
  margin-left: 5.2em;
  font-size: 15px !important;
}
.v-list--dense {
  padding-top: 0px !important;
}
.ml-3 {
  margin-left: 35px !important;
  margin-top: 10px;
}
.v-card.v-card--flat.v-sheet.theme--light {
  background-color: #d4d4d4 !important;
}
</style>
