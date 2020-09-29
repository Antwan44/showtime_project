<template>
    <div id="navigation">
<nav class="navbar navbar-expand-lg navbar-dark  text-center w-100 p-3 mb-5 " style="background-color:rgba(10, 30, 94, 0.3);padding-left:12rem; padding-right:12rem;">
  <a class=" ml-5 turc text-uppercase font-weight-bold" href="#">MongoShowTime</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mx-auto pr-5 ">
      <li class="nav-item active">
        <a class="nav-link text-light  text-uppercase" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light  text-uppercase " href="/events">EVENTS</a>
      </li>
     
      <li class="nav-item">
        <a v-if="token != null" class="nav-link text-light  text-uppercase" href="/profile" >PROFILE</a>
      </li>
    </ul>
    <div class=" my-2 my-lg-0">
  
      <router-link to="/login"><button v-if="token == null" class="btn pl-4 pr-4 p-2 mr-5"  style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;" type="submit">JOIN US</button></router-link>
      <router-link to="/login"><button @click="logout" v-if="token != null" class="btn pl-4 pr-4 p-2 mr-5"  style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;" type="submit">LOG OUT</button></router-link>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        data(){
          return{
            token : localStorage.getItem('token'),
          }

        },
        methods:{
          logout() {
                window.localStorage.removeItem('id');
                window.localStorage.removeItem('token');
                window.location.href = "/";
            }, 
        }
    }
</script>

<style scoped>
.red-color{
  color:#dc3545;
}



</style>