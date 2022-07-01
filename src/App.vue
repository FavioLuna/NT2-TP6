<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <NavBar/>
      <router-view></router-view>
      <!-- <IndexFormulario/> -->
    </div>
  </div>
</template>

<script>
/* import IndexFormulario from "./components/IndexFormulario.vue"; */
import NavBar from "./components/NavBar.vue"

export default {
  name: 'App',
  components: {
    /* IndexFormulario, */
    NavBar,
  }
}
</script>

<style>

</style>
