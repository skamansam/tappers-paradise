<template>
  <v-app light>
    <app-navigation :drawer="drawer" :clipped="clipped" :mini-variant="miniVariant" :items="items"></app-navigation>
    <app-header :mini-variant="miniVariant" :clipped="clipped"></app-header>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <business-tapper v-if="$route.name == 'home'"></business-tapper>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Hello from './components/Hello.vue'
  import BusinessTapper from './components/BusinessTapper.vue'
  import AppHeader from './components/App/AppHeader.vue'
  import AppNavigation from './components/App/AppNavigation.vue'
  // import store from './store'

  export default {
    components: {Hello, BusinessTapper, AppHeader, AppNavigation},
    data () {
      return {
        // store: store,
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Capitalist Playground'
      }
    }
  }
</script>
