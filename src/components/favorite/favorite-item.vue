<template>
  <div class="favorite-item">
     <img class="favorite-item__img" :src="require ('../../assets/images/' + favorite_item_data.image)" alt="cake">
     <div class="favorite-item__info">
       <div class="favorite-item__title">{{favorite_item_data.title}}</div>
       <div class="favorite-item__descr">{{favorite_item_data.descr}}</div>
       <div class="favorite-item__price">цена: {{favorite_item_data.price}} руб.</div>
     </div>
     <button class="favorite-item__btn btn" @click="deleteFromFavorite">Удалить</button>
  </div>
</template>


<script>

export default {
  name: "favorite-item",
  components: {},  
  props: {     
      favorite_item_data:{
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
      deleteFromFavorite(){
          this.$emit('deleteFromFavorite')
      },
      
  },   
  watch: {}, 
  mounted(){}
  

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .favorite-list{
        padding: 0 20px;
    }
    .favorite-item{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
          box-shadow: 0 0 8px 0 #e0e0e0;
          margin-bottom: 30px;
          padding: 6px;
        &__img{
            width: 150px;
        }
        &__title{
            margin-top: 15px;
            margin-bottom: 15px;
            font-weight: 700;
        }
        &__info{
            width: 400px;
            padding: 10px;
        }
        &__descr{
            margin-bottom: 20px;
            background-color: rgb(243, 243, 243);
            border-radius: 10px;
        }
      
    }
    

</style>