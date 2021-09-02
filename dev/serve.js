import Vue from 'vue';
import Dev from './serve.vue';

Vue.config.productionTip = false;
import '../docs/css/font-mc.scss';

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
