import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './components/Authentication/Login.vue'
import SignUpPage from './components/Authentication/SignUp.vue'
import Dashboard from './components/Pages/Dashboard.vue'
Vue.use(Router);

const routes = [
    {
        path: '/loginPage',
        component: LoginPage,
        name: "LoginPage"
    },
    {
        path: '/registerPage',
        component: SignUpPage,
        name: "RegisterPage"
    },
    {
        path: '/',
        component: Dashboard,
        name: "DashboardPage",
        children: [
            {
                path: '/',
                component: () => import('./components/Pages/DashboardMain.vue')
            },
            {
                path: '/department',
                component: () => import('./components/Pages/Department.vue')
            },
            {
                path: '/employee',
                component: () => import('./components/Pages/Employee.vue')
            },
            {
                path: '/transaction',
                component: () => import('./components/Pages/Transaction.vue')
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes
})