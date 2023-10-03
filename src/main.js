import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://fakestoreapi.com'; // URL de la API FakeStore

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');