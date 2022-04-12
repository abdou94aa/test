<template>
  <v-app id="app">
    <v-main style="background-color:#ddd;">
      <v-container fluid style="padding:0px;padding-top:12px">
        <router-view />
      </v-container>
    </v-main>
    <v-footer fixed style="background-color: #103754;display:contents;">
        <p :style="{color: theme.principale}">
          {{theme.principale}}
        </p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    data() {
      return {
        t: "",
      }
    },
    computed: {
      theme() {
        return this.$store.getters["theme/couleurs"];
      },
    },
    created() {
      this.$store.dispatch('theme/changerCouleur', 'red');
    }
}
</script>

<style>

</style>