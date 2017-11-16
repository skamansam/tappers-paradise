<template>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-btn
        icon
        light
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        light
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        light
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

</template>

<script>
// import * as types from '../../store/mutation-types'

export default {
  name: 'app-header',
  data () {
    return {
      // drawer: false,
      title: 'Capitalist Playground',
      miniVariant: false,
      clipped: false
    }
  },
  computed: {
    drawer () {
      debugger
      return this.$store.app.drawer()
    }
  }
}
</script>

<style>

</style>
