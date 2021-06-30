<template>
  <div class="main-wrapper">
    <theHeader />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>    
  </div>
</template>

<script>

import theHeader from './theHeader.vue'

export default {
  name: "main-wrapper",
  components: {
    theHeader
  },  


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .main-wrapper{
    width: calc(100vw - 100px);
    height: 100%;
    background-color: #fff;
    margin: 50px auto;
    border-radius: 10px;
    padding-bottom: 55px;
    max-width: 1400px;
    min-width: 320px;
}


</style>
