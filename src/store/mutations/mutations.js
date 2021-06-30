
export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
      },
      SET_CART: (state, product) => {
        if (state.cart.length){
          let isProductExist = false;
          state.cart.map((item) => {
             if(item.id === product.id){
              isProductExist = true;
              item.quantity++;
             }
          })
          if (!isProductExist) {
            state.cart.push(product) 
          }
        } else {
          state.cart.push(product) 
        }     
      },
      REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index, 1)
      },
      INCREMENT: (state,index) =>{
          state.cart[index].quantity++
      },
      DECREMENT: (state, index) =>{
          if(state.cart[index].quantity > 1){
            state.cart[index].quantity--
          }
      },
      SET_FAVORITE: (state, product) => {
        state.favorite.push(product)
      },
      REMOVE_FROM_FAVORITE: (state, index) => {
        state.favorite.splice(index, 1)
      }
    
}