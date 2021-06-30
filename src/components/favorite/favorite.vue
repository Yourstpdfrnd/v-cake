<template>
   <div class="favorite">
       <router-link :to="{name: 'catalog'}">
       <div class="catalog__link_to_cart">На главную</div>
       </router-link>
       <h1 class="favorite-title">Избранные товары</h1>
        <div v-if="!favorite_data.length"> 
        <p class="favorite-text"> У Вас нет товаров в избранном</p>
        <img class="favorite-image" :src="require('../../assets/images/emptywishlist.jpg')" alt="нет товаров в избранном"> </div>
        <div class="favorite-list">
          <FavoriteItem 
            v-for="item in favorite_data"
            :key="item.id"
            :favorite_item_data="item"
            @deleteFromFavorite="deleteFromFavorite"
          />
       </div>
       
   </div>
</template>


<script>

import FavoriteItem from './favorite-item.vue'
import {mapActions} from 'vuex'

export default {
    name: "favorite",
    components: {
        FavoriteItem
    },
    props: {
      favorite_data: {
           type: Array,
           default() {
               return []
           }
      }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_FAVORITE'
        ]),
       deleteFromFavorite(index){
            this.DELETE_FROM_FAVORITE(index)
       } 
    }
}
</script>


<style lang="scss">
    .favorite{
        position: relative;
    }
    .favorite-title{
        padding-top: 15px;
        margin-bottom: 30px;
    }
    .favorite-image{
        max-width: 400px;
    }
</style>