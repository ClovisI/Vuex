import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products
  },
  
  state: { // = data

  },

  getters: { // = computed properties

},

  actions,

//   addToCart (context, product) {
//     if (product.inventory > 0) {
//       context.commit('pushProductToCart', product)
//     } else {
//       // show out of stock message
//     }
//   }

  mutations: {

  }
})
