import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const URL = 'https://628e9f0c368687f3e719d47f.mockapi.io/usuarios'


export default new Vuex.Store({ //Funcion constructora estatica, construye una instancia de patron de estao global vuex
    state:{
      users:[],
      entro: false,
    },
    actions:{
      async getUsuariosAxios({commit}){
        try {
          let  {data}  = await axios(URL)
          commit('getUsers', data)
        } catch (error) {
          console.error('Error Axios', error)
        }
      },
      async postUser({commit}, newUser) {
        try {
          let { data: user } = await axios.post(URL, newUser, {'content-type' : 'application/json'})
          console.log('AXIOS POST user', user)
          commit('postUser', true)
        }
        catch(error) {
          console.error('Error en postUsuario()', error.message)
        }
      },
      clearUsers({commit}){
        commit('clearU')
      }
    }, 
    mutations:{
      getUsers(state, rta){
        state.users = rta
      },
      postUser(state, rta){
        state.state = rta
      },
      clearU(state){
        state.users = 0
      }
    }
})