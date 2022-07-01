<template>
  <div id="app">
    <div>
      <IndexHeader/>

      <IndexNavigator/>

      <div v-for="(colo, i) in colors" :key="i">
        <IndexSquare :color="colo"/>
      </div>
    </div>

  </div>
</template>

<script>

import IndexHeader from "./components/IndexHeader.vue";
import IndexNavigator from "./components/IndexNavigator.vue";
import IndexSquare from "./components/IndexSquare.vue";

export default {
  name: 'App',
  props: [],
  components: {
    IndexHeader,
    IndexNavigator,
    IndexSquare
  },
  mounted(){

  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>
#app {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>