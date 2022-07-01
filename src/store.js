import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({ //Funcion constructora estatica, construye una instancia de patron de estao global vuex
    state:{
      squares:[],
      colors: [],
      pickedColor: "",
      cCount: 6,
      message:"",
      cDisplay: "",
      hColor: "steelblue",
      buttonMessage: "New Colors!",
      isHard: true
    },
    actions:{
      clickSquare({commit}, clickedColor){
        if (clickedColor === this.state.pickedColor) {
          var msg = "You Picked Right!";
          var bMsg = "Play Again!";
          commit("setMsg", msg)
          commit("setBmsg", bMsg)
          commit("setHColor")
        } else {
          msg = "Try Again!";
          commit("setMsg", msg)
        }
      },
      setDificultad({commit}, bool){
        commit("setDificultad", bool)
      }
    }, 
    mutations:{
      setMsg(state, msg){
        state.message = msg
      },
      setBmsg(state, msg){
        state.buttonMessage = msg
      },
      setDificultad(state, bool){
        state.isHard = bool
      },
      setHColor(state){
        state.hColor = this.state.pickedColor
      }

    }
})