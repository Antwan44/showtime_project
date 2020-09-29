<template>
  <div class="Events">
    <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
      style="background-color: rgba(0,0,0,0.6);">

      <div class="card-body ">
        <p class="card-title turc font-weight-bold">WELCOME TO MONGOSHOWTIME</p>
        <h4 class="card-text mb-5">WHAT ARE YOU LOOKING FOR</h4>
        <div class="search-bar w-75 m-auto">

          <input type="text" v-model="search" placeholder="Search..." class="search text-center mb-2 p-1 w-100"
            style="background:rgba(10, 30, 94, 0.3); border:none; color:white; border-radius:5px; ">

        </div>
        <div class="search">
          <div class="grid">
            <div class="row text-center">


              <div class="col-lg-4">
                <!--            <i class="fas fa-music my-auto col-lg-4"></i> -->
                <label for="band">Select your favourite band:</label>
                <select v-model="band" class="custom-select ml-4"
                  style="background:rgba(10, 30, 94, 0.3); border:none; color:white;" >
                  <option value="">Select your favourite band</option>
                  <option v-for="concert in getAllConcert" :key="concert.id" :value="concert.band">{{concert.band}}
                  </option>
                </select>
              </div>
              <div class="col-lg-4 ">
                <!--             <i class="far fa-calendar "></i> -->
                     <label >Select a date:</label>
                <input v-model="date" type="date" class="custom-select ml-4"
                  style="background:rgba(10, 30, 94, 0.3); border:none; color:white;">
              </div>
              <div class="col-lg-4">
                <!--     <i class="fas fa-microphone my-auto ml-4"></i> -->
                             <label >Select your favourite genre:</label>
                <select v-model="genre" class="custom-select ml-4"
                  style="background:rgba(10, 30, 94, 0.3); border:none; color:white;">
                  <option value="">Select your favourite genre</option>
                  <option v-for="concert in getAllConcert" :key="concert.id" :value="concert.genre">{{concert.genre}}
                  </option>

                </select>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class=" w-75 m-auto">
      <h6 class="text-right text-uppercase turc ">All Events</h6>
      <hr style="border-bottom :3px solid turquoise; width:8%; margin-left:16rem;">

      <div class="grid">
        <div class="row">
          <div class="col-lg-2">
            <div class="card border p-4 mb-5" style="background:none; ">
              <p class="border-bottom border-white pb-3 "> <i class="far fa-clock turc mr-2"></i> 24X7 Care</p>
              <p class="border-bottom border-white pb-3"> <i class="fas fa-headset turc mr-2"></i> 100% Assurance </p>
              <p class="border-bottom border-white pb-3"><i class="fas fa-barcode turc mr-2"></i> Fast pass</p>

            </div>
            <img class="card-img-top" src="https://tpc.googlesyndication.com/simgad/1046413154523033707"
              alt="Card image cap">
          </div>
          <div class="col-lg-10">
            <div class="grid">
              <div class="row">

                <div v-for="concert in  filteredConcert" :key="concert._id" class="card col-lg-4 col-sm-12"
                  style="background:none;">

                  <img class="card-img-top" :src="concert.image" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">{{concert.title}}</h5>
                    <p class="card-text">{{concert.description}}</p>
                    <p class="card-price">{{concert.price}}</p>
                    <div class="d-flex justify-content-between">
                      <router-link :to="'events/'+concert._id"><button class="btn pl-4 pr-4"
                          style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;">More
                          info</button></router-link>
                      <svg v-show="like" @click="addFavorite(concert), like= false, liked=true " width="1em" height="1em" viewBox="0 0 16 16"
                        class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                          d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>

                       <svg v-show="liked" @click="addFavorite(concert), like= true, liked=false " width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  // import myshowtime from '@/store/services/myshowtime.js';

  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: "Eventpage",
    components: {

    },
    data() {
      return {
        tabs: null,
        search: "",
        band: null,
        genre: null,
        concertArray: [],
        like: true,
        liked: false,
        date:null,
      }
    },
    methods: {
      ...mapActions(['fetchAllConcert']),

      addFavorite(concert) {


var array = JSON.parse(window.localStorage.getItem("concert")) || [];
array.push(concert);

var data = array.filter((obj, pos, array) => {
            return array.map(mapObj =>
                  mapObj._id).indexOf(obj._id) == pos;
            });

    
window.localStorage.setItem('concert',JSON.stringify(data))



}
          

    },
 
    created() {

      this.fetchAllConcert();


    },
    computed: {
      ...mapGetters(['getAllConcert']),
      filteredConcert() {

        if (this.search != null && this.band == null && this.genre == null) {
          return this.getAllConcert.filter(data => data.title.toLowerCase().includes(this.search.toLowerCase()));

        } else if (this.band != null && this.genre == null && this.search == "") {

          return this.getAllConcert.filter(data => data.band.toLowerCase().includes(this.band.toLowerCase()));
        } else if (this.genre != null && this.search == "" && this.band == null) {
          return this.getAllConcert.filter(data => data.genre.toLowerCase().includes(this.genre.toLowerCase()));
        }

        return this.getAllConcert.filter(data => data.title.toLowerCase().includes(this.search.toLowerCase()));
      }
    }
  }

</script>

<style scoped>
  .Events {
    min-height: 100vh;
  }

  .Events .card-search {
    background-color: rgba(0, 219, 222, 0.2);
    background-image: linear-gradient(90deg, rgba(0, 219, 222, 0.5) 0%, rgba(252, 0, 255, 0.5)100%);
    /*     position: absolute;
    top: 600px;
    left: 240px; */
    border: 0px;


  }
</style>