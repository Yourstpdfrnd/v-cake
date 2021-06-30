<template>
  <div class="cart">
      <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_cart">На главную</div>
      </router-link>
      <h1 class="cart-name">Корзина</h1>
       
      <div v-if="!cart_data.length"> 
      <p class="cart-text"> Для того, чтобы сделать заказ, перейдите на главную страницу.</p>
      <img class="cart-image" :src="require('../../assets/images/empty-cart.png')" alt="Корзина пустая"> </div>
      <div class="cart-list">
         <cartItem 
         v-for="(item, index) in cart_data"
         :key="item.id"
         :cart_item_data="item"
         @deleteFromCart="deleteFromCart(index)"
         @increment="increment(index)"
         @decrement="decrement(index)"
      />
      <div class="cart__total">
          <p class="cart__total-name">Сумма заказа:</p>
          <p> {{totalCost}} руб. </p>
      </div>
      </div>
     
  </div>
</template>

<script>

import cartItem from './cart-item'
import {mapActions} from 'vuex'

export default {
  name: "cart",
  components: {
      cartItem
  },  
  props: {     
       cart_data: {
           type: Array,
           default() {
               return []
           }
       }
  },    
  data(){     
    return{}
  },
  computed: {   
      totalCost(){
         return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
                      
      }
  },  
  methods: {     
       ...mapActions([
          'DELETE_FROM_CART',
          'INCREMENT_CART_ITEM',
          'DECREMENT_CART_ITEM'
       ]),      
       deleteFromCart(index){
           this.DELETE_FROM_CART(index)
       },
       increment(index){
            this.INCREMENT_CART_ITEM(index)
       },
       decrement(index){
            this.DECREMENT_CART_ITEM(index)
       }
  },  
  watch: {},     
  mounted(){}
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .cart{
        position: relative;
        
    }
    .catalog__link_to_cart{
        position: absolute;
        right: 25px;
        padding: 12px;
        font-size: 15px;
        cursor: pointer;
    }

    .cart-list {
    padding: 0 20px;
    }

    .cart-name {
        padding: 25px 0;
    }

    .cart__total {
    padding: 12px;
    display: flex;
    justify-content: center;
    background-color: #ffddd1;
    font-size: 22px;
    max-width: 320px;
    border-radius: 20px;
    margin-top: 25px;
    }

    .cart__total-name{
        margin-right: 8px;
    }

    .cart-text{
        padding: 0 10px;
    }

    .cart-image  {
        max-width: 100%;
    }

</style>