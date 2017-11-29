    <template>
      <v-navigation-drawer
        persistent
        :mini-variant="miniVariant"
        :clipped="clipped"
        :isActive="app_drawer"
        enable-resize-watcher
        app
      >
        <v-list>
          <v-list-tile
            value="true"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </template>

    <script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'app-navigation',
      data () {
        return {
          // drawer: false,
          clipped: false,
          miniVariant: false,
          items: {}
        }
      },
      methods: {
      },
      computed: {
        drawer: {
          get () {
            return this.$store.state.app_drawer
          },
          set (value) {
            this.$store.commit('APP_DRAWER_TOGGLE', value)
          }
        },
        ...mapGetters([
          'app_drawer'
        ])
      }
    }
    </script>

    <style>

    </style>

