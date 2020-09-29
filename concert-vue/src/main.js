import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import ScrollAnimation from './directives/scrollanimation'


Vue.directive('scrollanimation', ScrollAnimation);

/* router.beforeEach((to, from, next) => {
  const isLogged = localStorage.getItem('token');
    if (isLogged) next()
    else{
      if(to.meta.requiresVisitor) next()
      else next('/connexion')
    }
}) */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
