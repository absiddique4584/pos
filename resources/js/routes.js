
//let login = required('./components/auth/login.vue').default;
import login from "./components/auth/login";
import register from "./components/auth/register";
import forget from "./components/auth/forget";
import logout from "./components/auth/logout";
import home from "./components/home";
//employee
import storeEmployee from "./components/employee/create";

export const routes = [
    { path: '/', component: login, name: '/' },
    { path: '/register', component: register, name: 'register'  },
    { path: '/forget', component: forget, name: 'forget'  },
    { path: '/logout', component: logout, name: 'logout'  },
    { path: '/home', component: home, name: 'home'  },

    //employee
    { path: '/store-employee', component: storeEmployee, name: 'store-employee'  }
  ]

