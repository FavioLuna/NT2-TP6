<template>
  <section class="src-components-http-client">
    <div class="jumbotron">
      <h2>HttpClient</h2>
      <hr>
      <hr>
      <h3>Users on Mockapi:</h3>
      <hr>
      <div class="btn btn-primary my-3 mr-3" @click="getUsers()">Pedir usuarios (axios)</div>
      <div class="btn btn-danger my-3 mr-3" @click="clearUsers()">CLEAR</div>
      <br>
      <div v-if="users.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>Usuario</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>

          <tr v-for="(user, index) in users" :key="index">
            <td>{{user.nombre}}</td>
            <td>{{user.edad}}</td>
            <td>{{user.email}}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    beforeMount(){
      this.$store.dispatch("getUsuariosAxios")
    },
    data () {
      return {
/*         url: 'https://628e9f0c368687f3e719d47f.mockapi.io/usuarios',
        usuarios:[],  */
      }
    },
    methods: {

/*       async getUsuariosAxios(){
        try {
          let  rta  = await this.axios(this.url)
          this.usuarios =  rta.data 
        } catch (error) {
          console.error('Error Axios', error)
        }
      }, */
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http-client {

  }
  .jumbotron{
    background-color: rgb(49, 192, 49);
    color: black;
  }
</style>
