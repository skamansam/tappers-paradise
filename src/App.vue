<template>
  <v-app light>
    <app-navigation :drawer="drawer" :clipped="clipped" :mini-variant="miniVariant" :items="items"></app-navigation>
    <app-header :mini-variant="miniVariant" :drawer="drawer" :clipped="clipped"></app-header>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
              <v-container
                  fluid
                  style="min-height: 0;"
                  grid-list-lg
               >
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-card>
                      <v-card-title >
                        <h2>Current Game Title</h2>
                        <h3>{{currentValue | currency('$')}}</h3>
                      </v-card-title>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
              <income-generator v-on:valueChanged="updateIncome" v-if="$route.name == 'home'"></income-generator>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    <v-navigation-drawer
      fixed
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
  import IncomeGenerator from './components/IncomeGenerator.vue'
  import AppHeader from './components/App/AppHeader.vue'
  import AppNavigation from './components/App/AppNavigation.vue'
  // import store from './store'

  export default {
    components: {Hello, IncomeGenerator, AppHeader, AppNavigation},
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
        title: 'Capitalist Playground',
        currentValue: 0.00
      }
    },
    filters: {
      currency (val, symbol) {
        return symbol + val.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      }
    },
    methods: {
      updateIncome (options) {
        debugger
        this.currentValue += options.value
      }
    }
  }
</script>
