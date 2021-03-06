import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import NotFound from './pages/NotFound.vue'
import Employees from './pages/Employees.vue'
import Home from './pages/Home.vue'
import App from './App.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/employees', component: Employees },
  { path: '/:any', component: NotFound },
]

const router = createRouter({
  history: createWebHistory('/tutorial-vue/'),
  routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(router)
app.mount('#app')
