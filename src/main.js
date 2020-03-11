import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/index';
import store from './store';
import firebase from 'firebase';
import './firebaseinit';
Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app)
  {
new Vue({
  
  render: h => h(App),
  router,
  store,

  

}).$mount('#app')
}
})
