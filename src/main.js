import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWineBottle, faWineGlassAlt, faWineGlass, faCog, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './registerServiceWorker'

library.add(
  faWineBottle,
  faWineGlassAlt,
  faWineGlass,
  faCog,
  faChevronLeft
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
