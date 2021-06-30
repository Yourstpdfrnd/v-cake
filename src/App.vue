<template>
  <div id="app">
      <mainWrapper />
 
  </div>
</template>

<script>
import mainWrapper from "./components/main-wrapper.vue";


export default {
  name: "App",
  components: {
     mainWrapper,  
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(to right bottom, #ffdfb6, #ffdebd, #ffddc4, #ffddca, #ffddd1);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  p{
    margin: 0;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
   margin: 0;
  }



</style>
