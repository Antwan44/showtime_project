<template>
<div id="app">
  <router-view></router-view>
      <Footer />
</div>
</template>

<script>
  import Footer from './components/Footer';
export default {
  name: 'App',

  components: {
Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,577;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,577;1,600;1,700;1,800;1,900&display=swap');

#app{
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    overflow: hidden;
    background: #001232;
    color:white;
}
.red-color{
  color:#dc3545;
}

*:focus {
    outline: none;
}

a {
    text-decoration:none;
}

.turc{
  color:#31D7A9;
}

.turc:hover{
   color:#31D7A9;
   text-decoration: none;
}

</style>
