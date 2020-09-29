<template>
  <div id="home">

    <Navbar />

    <div id="hero">
      <div class="hero-content d-flex justify-content-center"
        style="background-color: rgba(0,0,0,0.6); min-height:60vh;">
        <div class="hero-text mx-auto my-auto text-light text-center">
          <h1 class="text-center font-weight-bold text-uppercase display-3">Book your <br> tickets for <span
              class="text-info">concerts</span></h1>
          <h4>Safe, secure, reliable ticketing.Your ticket to live entertainment!</h4>
        </div>

      </div>

    </div>
    <div id="carouselExampleControls" class="carousel slide w-75 m-auto mt-5 mb-5" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/carousel/theweekend.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/carousel/tournée1.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/carousel/tournée2.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    
    <div class=" w-75 m-auto ">
      <h6 class="text-right mt-5 "><a class="text-uppercase turc" href="/events">View All</a></h6>
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

               
                <div v-for="concert in  getAllConcert" :key="concert._id" class="card col-lg-4 col-sm-12"
                  style="background:none;">

         
                  <div class="card-body">
     
                    <router-link :to="'events/'+concert._id" >         <img class="card-img-top"
                    :src="concert.image"
                    alt="Card image cap"></router-link>
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
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  import Navbar from '../components/Navbar';

  export default {
    data(){
      return{
   
      }
    },
    components: {
      Navbar,
    
    },
        methods: {
      ...mapActions(['fetchAllConcert']),



    },
    created() {

      this.fetchAllConcert();


    },
    computed: {
      ...mapGetters(['getAllConcert']),
     
    }
  }
</script>
<style scoped>
  #hero {
    background: url(/images/concert.jpg) center;
     margin-bottom: 5rem;


  }


  .bg-blue {
    background-color: #0A1E5E;
  }

  #home {
    position: relative;

  }

  .search::placeholder {
    color: white;
  }


  .search {
    color: white;
  }

 

  .custom-select-form {
    margin-right: 5rem;
    color: white;
    background: none;
    font-size: 1.2rem;

  }

  .custom-select-form select {
    color: black;

  }



  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s cubic-bezier(.41, .01, .57, 1.61);
  }

  /* 
    If the element intersects with the viewport, the before-enter class is added.
  */
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
</style>