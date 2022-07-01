<template>
  <section class="src-components-index-formulario">
    <div class="jumbotron">
      <vue-form :state="formState" @submit.prevent="enviar()">
        <h1>TP8-Formulario Vuex</h1>
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input 
          type="text" 
          id="nombre" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.nombre" 
          required
          name="nombre"
          :minlength="minNomLength"
          :maxlength="maxNomLength"
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo tiene como mínimo {{minNomLength}} y como máximo {{maxNomLength}} caracteres.
            </div>             
          </field-messages> 
        </validate>        

        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
          type="number" 
          id="edad" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.edad" 
          required
          name="edad"
          :min="edadMin"
          :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad minimia permitida es de {{edadMin}} años
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años
            </div>
          </field-messages> 
        </validate>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
          type="email" 
          id="email" 
          class="form-control" 
          autocomplete="off" 
          v-model.trim="formData.email"
          required
          name="email"
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>           
            <div slot="email" class="alert alert-danger mt-1">Email no valido</div>           
          </field-messages> 
        </validate>

       <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="postUsuario()">Enviar</button>
      </vue-form>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-index-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        minNomLength: 3,
        maxNomLength: 15, 
        edadMin: 18,
        edadMax: 120,
      }
    },
    methods: {
      getInicialData(){
        return{
          nombre:'',
          edad:'',
          email: '',
        }
      },
      enviar(){
        this.formData = this.getInicialData();
        this.formState._reset();
      },
      postUsuario(){
        let newUser = {
          nombre : this.formData.nombre, 
          edad : this.formData.edad, 
          email: this.formData.email
        }
        this.$store.dispatch("postUser", newUser)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
 .jumbotron {
    background-color: rgb(57, 57, 207);
    color: white;
  } 
  .src-components-index-formulario{ 
  }
  .table {
    color: rgb(255, 255, 255);
    border-radius: 0.2rem;
  }
  .table-responsive{
    border-radius: 0.2rem;
  }

</style>
