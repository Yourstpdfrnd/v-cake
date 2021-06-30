<template>
  <div class="catalog">
     <h1 class="catalog-title">Наша продукция</h1>

    <catalogBtns 
       :options="categories"
       @select="sortByCategories"    
    />
    
     <div class="catalog-list">
        <catalog-item  
            v-for="product in filteredProducts"
            :key="product.id"
            :product_data="product"
            @addToCart="addToCart"
            @addToFavorite="addToFavorite"
        />
     </div>
 
  </div>
</template>

<script>

import catalogItem from './catalog-item'
import catalogBtns from './catalog-btns.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "catalog",
  components: {
      catalogItem,
      catalogBtns
     
  },  
  props: {},   
  data(){      
    return{
        categories: [
            {name: 'Все', value: 0},
            {name: 'Муссовые', value: 1},
            {name: 'Бисквитные', value: 2},
            {name: 'Чизкейки', value: 3},
            {name: 'Сыроедческие', value: 4},
            {name: 'Капкейки', value: 5}
        ],
        sortedProducts: [],
      
    }
  },
  computed: {       
      ...mapGetters([
          'PRODUCTS',
          'CART',
          'FAVORITE'
      ]),
      filteredProducts(){
          if(this.sortedProducts.length){
              return this.sortedProducts
          } else {
            return this.PRODUCTS
          }
      },
  },   
  methods: {      
      ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
      'ADD_TO_FAVORITE'
      ]),
      addToCart(data){
          this.ADD_TO_CART(data)
      },
      addToFavorite(data){
          this.ADD_TO_FAVORITE(data)
      },
      sortByCategories(category){
        this.sortedProducts = [];
        let vm = this;
        this.PRODUCTS.map(function (item) {
            if(item.category === category.name){
                vm.sortedProducts.push(item);
            }
        })
      }
  },      
  watch: {},    
  mounted() {   
     this.GET_PRODUCTS_FROM_API()
  }     
     
 
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
   .catalog{
       padding: 20px;
        &-list{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 40px;
        }
        &-title{
            margin-bottom: 25px;
        }
   }
   
   

</style>