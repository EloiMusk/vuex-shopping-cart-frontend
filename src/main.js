import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'

// Vue 2.x
// Vue.use(Vuex);
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   store: store
// });

createApp(App).use(store).use(router).mount('#app')
