import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}){
        return axios('http://localhost:3000/products', {
        method: 'GET'
        })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products;
        })
        .catch((error)=> {
          console.log(error)
          return error;
        })
      },
      ADD_TO_CART({commit}, product) {
        commit ('SET_CART', product);
      },
      ADD_TO_FAVORITE({commit}, product){
        commit ('SET_FAVORITE', product);
      },
      DELETE_FROM_CART({commit}, index) {
        commit ('REMOVE_FROM_CART', index)
      },
      DELETE_FROM_FAVORITE({commit}, index){
        commit('REMOVE_FROM_FAVORITE', index)
      },
      INCREMENT_CART_ITEM({commit}, index){
        commit('INCREMENT', index)
      },
      DECREMENT_CART_ITEM({commit}, index){
        commit('DECREMENT', index)
      }
}