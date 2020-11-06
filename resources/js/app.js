
require('./bootstrap');
window.Vue = require('vue');

//import user class
import User from './Helpers/User';
window.User = User


//import Notification class
import Notification from "./Helpers/Notification";
window.Notification = Notification


//Router Import
import {routes} from './routes';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode:'history'
})

//Vue.component('/', require('./components/auth/login').default);

//sweet alert 2
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast;


const app = new Vue({
    el: '#app',
    router
});
