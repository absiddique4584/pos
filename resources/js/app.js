
require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Router Import
import {routers} from './routes';

const router = new VueRouter({
    routes // short for `routes: routes`
  })

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});
