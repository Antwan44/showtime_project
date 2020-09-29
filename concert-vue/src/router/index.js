import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Event from '../views/Event.vue'
import Qrcode from '../views/Qrcode.vue'
import ShowEvent from '../views/ShowEvent.vue'
import Profile from '../views/Profile.vue'

import Ticket from '../views/Ticket.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{requiresVisitor: false},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/events',
    name: 'Event',
    component: Event
  },
  {
    path: '/events/:id',
    name: 'ShowEvent',
    component: ShowEvent,
    meta:{requiresVisitor: false},
  },
  {
    path: '/qrcode/:id',
    name: 'Qrcode',
    component: Qrcode,
    meta:{requiresVisitor: false},
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{requiresVisitor: false},
  },
  {
    path:'/ticket/:id',
    name:'Ticket',
    component:Ticket,
    meta:{requiresVisitor: false},
  }





]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
