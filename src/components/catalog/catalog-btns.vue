<template>
    <div class="catalog-btns">
        <button class="catalog-btn"
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
        >
        {{option.name}}
        </button>
    </div>
</template>


<script>
export default {
    name: "catalog-btns",
     props: {
        options: {
            type: Array,
            default(){
                return []
            }
        }
     },
     methods: {
         selectOption(option){
           this.$emit('select', option)
         }
     }
}
</script>


<style lang="scss">
   .catalog-btn{
       margin: 0 10px;
       padding: 12px;
       border: none;
       border-radius: 8px;
       cursor: pointer;
       transition: all .2s ease-in;
       &:hover{
          background-color: #ffddd1;
       }
   }
   
</style>