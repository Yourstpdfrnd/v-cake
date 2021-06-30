<template>
  <div class="catalog-item">
   <img class="catalog-item-img" :src="require ('../../assets/images/' + product_data.image)" alt="cake">
   <div class="catalog-item-title">{{product_data.title}}</div>
   <div class="catalog-item-descr">{{product_data.descr}}</div>
   <div class="catalog-item-price">цена: {{product_data.price}} руб.</div>
   <div class="catalog-item__info">
     <button class="catalog-item-btn btn" @click="addToCart">Добавить в корзину</button>
     <svg viewBox="0 0 32 32" id="heart">
      <path @click="addToFavorite" class="catalog-item-like" id="heart-path" d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
        C30,20.335,16,28.261,16,28.261z"/>            
    </svg>
   </div>
  
  </div>
</template>

<script>


export default {
  name: "catalog-item",
  components: {},  
  props: {     
    product_data: {
        type: Object,
        default(){
            return {}
        }
    }
  },   
  data(){      
    return{
    }
  },
  computed: {},   
  methods: {     
      addToCart(){
        this.$emit('addToCart', this.product_data);
      },
      addToFavorite(){
        this.$emit('addToFavorite', this.product_data)
      }
      
  },  
  watch: {},   
  mounted(){     
     this.$set(this.product_data, 'quantity', 1)
  }
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .catalog-item{
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 15px;
        margin-bottom: 15px;
        width: 300px;
        border-radius: 8px;
    }
    .catalog-item-img{
        margin: auto;
        width: 180px;
    }
    .catalog-item-title{
        margin-top: 15px;
        margin-bottom: 15px;
        font-weight: 700;
    }
    .catalog-item-descr{
        margin-bottom: 20px;
        background-color: rgb(243, 243, 243);
        border-radius: 10px;
    }
    .catalog-item-price{
        margin-bottom: 20px;
    }

    .catalog-item__info{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .catalog-item-like{
      width: 25px;
      height: 25px;
      cursor: pointer;
      transition: all .2s;
      &:hover{
        fill: brown;
      }
      }
    
    .btn{
        background-image: linear-gradient(to right, #ffdfb6, #ffdebd, #ffddc4, #ffddca, #ffddd1);
        padding: 12px 15px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        &:hover{
          background-image: linear-gradient(to left, #ffdfb6, #ffdebd, #ffddc4, #ffddca, #ffddd1);
        }
    }

    svg#heart {
    height: 25px;
    width: 25px;
}

#heart-path {
  fill: #ffddd1;
  stroke: red;
  stroke-width: 1px;
  stroke-dasharray: 125;
  stroke-dashoffset: -125;
  stroke-linecap: butt;
  -webkit-transition: all 2s ease-out;
  -moz-transition: all 2s ease-out;
  -ms-transition: all 2s ease-out;
  -o-transition: all 2s ease-out;
  transition: all 2s ease-out;
}

#heart-path:hover {
  fill: red;
  stroke-dashoffset: 0;
  stroke-dasharray: 125;
}

 
</style>