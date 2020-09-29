import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import ticket from './modules/ticket.js'
import concert from './modules/concert.js'

 import createPersistedState from 'vuex-persistedstate' 

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    concert,
    ticket,

  },
  plugins: [createPersistedState()] 
  
})