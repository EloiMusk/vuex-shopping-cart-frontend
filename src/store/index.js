import { createStore } from 'vuex'
import product from './modules/product'
import cart from './modules/cart'

// Vue 2.x
// export default new Vuex.Store({
//   modules: {
//     product,
//     cart
//   }
// });

export default createStore({
  modules: {
    product,
    cart
  }
})
