import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueGeolocation from 'vue-browser-geolocation';
import vuetify from './plugins/vuetify';
import VFormBase from 'vuetify-form-base';  
// import './styles/customStyle.css';

import VueClipboard from 'vue-clipboard2'
 
Vue.use(VueClipboard)
Vue.use(VueGeolocation);
Vue.use(VFormBase);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VFormBase,
  render: h => h(App)
}).$mount('#app')
