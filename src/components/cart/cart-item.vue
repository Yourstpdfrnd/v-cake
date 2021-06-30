<template>
 <div class="cart-item">
     <img class="cart-item__img" :src="require ('../../assets/images/' + cart_item_data.image)" alt="cake">
     <div class="cart-item__info">
       <div class="cart-item__title">{{cart_item_data.title}}</div>
       <div class="cart-item__descr">{{cart_item_data.descr}}</div>
       <div class="cart-item__price">цена: {{cart_item_data.price}} руб.</div>
     </div>
     <div class="cart-item__quantity"> 
       <p>Кол-во:</p>
       <span @click="decrementItem">-</span>
       {{cart_item_data.quantity}} 
       <span @click="incrementItem">+</span>
       </div>
     <button @click="deleteFromCart" class="cart-item-btn btn">Удалить</button>
  </div>
</template>

<script>

export default {
  name: "cart-item",
  components: {},  
  props: {     
      cart_item_data:{
        type: Object,
        default(){
          return {}
      }
    }
  },   
  data(){    
    return{}
  },
  computed: {},   
  methods: {     
      
      deleteFromCart(){
          this.$emit('deleteFromCart')
      },
      incrementItem(){
          this.$emit('increment')
      },
      decrementItem(){
          this.$emit('decrement')
      }
  },   
  watch: {}, 
  mounted(){}
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
    .cart{
        &-item{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
          box-shadow: 0 0 8px 0 #e0e0e0;
          margin-bottom: 30px;
          padding: 6px;
        }
        &-item__info{
          width: 400px;
          padding: 10px;
        }
        &-item__img{
          width: 120px;
        }
        &-item__descr {
          margin-bottom: 10px;
        }
        &-item__price {
          font-weight: 600;
        }
        &-item-btn{
          height: 45px;
        }
        &-item__quantity span{
          font-size: 20px;
          cursor: pointer;
        }
        &-item__title {
          margin-bottom: 10px;
          font-weight: 600;
        }
    }

</style>