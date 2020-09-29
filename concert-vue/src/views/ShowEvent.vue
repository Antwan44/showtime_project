<template>
  <div class="ShowEvent">
    <Navbar />
    <div class="card m-auto col-lg-4 col-sm-12" style="background:none;">

      <img class="card-img-top"
        :src="getConcertById.image"
        alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{getConcertById.title}}</h5>
        <p class="card-text">{{getConcertById.description}}</p>
        <p class="card-price">{{getConcertById.price}}</p>
        <button class="btn pl-4 pr-4"
          style="background:-webkit-linear-gradient(169deg, #5560ff 17%, #aa52a1 63%); color:white; border:0; border-radius:15px;"
          data-toggle="modal" data-target="#exampleModal">BUY NOW</button>



        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-dark">
                <h3 class="modal-title">
                  Payment Details
                </h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body text-dark">
             
                <div class="panel panel-default">
                  <div class="panel-heading">

                  </div>
                  <div class="panel-body">
                    <form @submit.prevent="paiement()" role="form">
                      <div class="form-group">
                        <label for="cardNumber">
                          CARD NUMBER</label>
                        <div class="input-group">
                          <input type="text" class="form-control" id="cardNumber" placeholder="Valid Card Number"
                            required autofocus />
                          <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-xs-7 col-md-7">
                          <div class="form-group">
                            <label for="expityMonth">
                              EXPIRY DATE</label>
                            <div class="col-xs-6 col-lg-6 pl-ziro">
                              <input type="text" class="form-control" id="expityMonth" placeholder="MM" required />
                            </div>
                            <div class="col-xs-6 col-lg-6 pl-ziro">
                              <input type="text" class="form-control" id="expityYear" placeholder="YY" required /></div>
                          </div>
                        </div>
                        <div class="col-xs-5 col-md-5 pull-right">
                          <div class="form-group">
                            <label for="cvCode">
                              CV CODE</label>
                            <input type="password" class="form-control" id="cvCode" placeholder="CV" required />
                          </div>
                        </div>
                      </div>
                      <br />
                      <button type="submit" class="btn btn-success btn-lg btn-block" role="button">Pay</button>
                    </form>
                  </div>
                </div>
                <ul class="nav nav-pills nav-stacked">
                  <li class="active "><span class="badge pull-right"><span
                        class="glyphicon glyphicon-usd"></span>{{getConcertById.price}}</span> Final Payment
                  </li>
                </ul>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    
  </div>
</template>

<script>
  import Navbar from '../components/Navbar';
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    name: 'ShowEvent',
    components: {
      Navbar,
    },
    data() {
      return {
        tabs: null,
      }
    },
    methods: {
      ...mapActions(['fetchConcertById', 'fetchUser', 'addTicket']),
      paiement() {
        var obj = {
          "userId": localStorage.getItem('id'),
          "concertId": this.$route.params.id,
        }



        this.addTicket(obj);
        
      
 

      }


    },
    created() {

      this.fetchConcertById(this.$route.params.id);




    },
    computed: {
      ...mapGetters(['getConcertById', 'getUser','getNewTicket']),

    }


  }
</script>

<style scoped>
  .ShowEvent {
    min-height: 100vh;
  }
</style>