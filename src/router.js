import Vue from "vue";
import VueRouter from "vue-router";
import IndexFormulario from "./components/IndexFormulario.vue"
import HttpClient from './components/HttpClient.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/formulario'},
        { path: '/formulario', component: IndexFormulario},
        { path: '/http-client', component: HttpClient}
    
    ]
})