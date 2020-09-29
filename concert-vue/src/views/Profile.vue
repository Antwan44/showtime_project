<template>
    <div id="profile">

        <Navbar />



        <div class="row">
            <div class="col-sm-3">
                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">

                    <ul class="list-group list-group-flush">
                        <li class="btn btn-outline-light">
                            <div
                                @click="user_toggle = true, update_toggle = false, favorite_toggle = false, ticket_toggle = false, password_toggle = false">
                                <strong>your Informations</strong></div>
                        </li>
                        <li class="btn btn-outline-light mt-2">
                            <div
                                @click="ticket_toggle = true, user_toggle = false, favorite_toggle = false, update_toggle = false, password_toggle = false">
                                <strong>Your Tickets</strong></div>
                        </li>
                        <li class="btn btn-outline-light mt-2">
                            <div
                                @click="favorite_toggle = true, update_toggle = false, user_toggle = false, ticket_toggle = false, password_toggle = false">
                                <strong>Your favorites</strong></div>
                        </li>
                        <li class="btn btn-outline-light mt-2">
                            <div
                                @click="update_toggle = true, user_toggle = false, favorite_toggle = false, ticket_toggle = false, password_toggle = false">
                                <strong>update your Informations</strong></div>
                        </li>
                        <li class="btn btn-outline-light mt-2">
                            <div
                                @click="password_toggle = true, user_toggle = false, favorite_toggle = false, update_toggle = false, ticket_toggle = false">
                                <strong>Change your Password</strong></div>
                        </li>
                    </ul>
                    <div class="btn btn-outline-danger mt-2" style="cursor: pointer;" @click="logout()">Log Out</div>

                </div>
            </div>






            <!-- toggle user Info -->
            <div v-show="user_toggle" class="col-sm-9">
                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">
                    <div class="card-body">
                        <h3>Hello<br>{{getUser.firstname}} {{getUser.lastname}}</h3>
                        <p>{{getUser.email}}</p>
                        <p><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone" fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3.925 1.745a.636.636 0 0 0-.951-.059l-.97.97c-.453.453-.62 1.095-.421 1.658A16.47 16.47 0 0 0 5.49 10.51a16.471 16.471 0 0 0 6.196 3.907c.563.198 1.205.032 1.658-.421l.97-.97a.636.636 0 0 0-.06-.951l-2.162-1.682a.636.636 0 0 0-.544-.115l-2.052.513a1.636 1.636 0 0 1-1.554-.43L5.64 8.058a1.636 1.636 0 0 1-.43-1.554l.513-2.052a.636.636 0 0 0-.115-.544L3.925 1.745zM2.267.98a1.636 1.636 0 0 1 2.448.153l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                            </svg> {{getUser.phone}}</p>

                    </div>
                </div>

            </div>


            <!-- toggle user Ticket info -->
            <div v-show="ticket_toggle" class="col-sm-9">

                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">
                    <div class="card-body" >
                                 <h3 >Your Tickets</h3>
                        <div class="text" v-for="ticket in filteredConcertUser" :key="ticket.id">

                    

                       <a class="badge badge-dark" :href="'/ticket/'+ticket._id">{{ticket._id}}</a>
                        </div>
                       
                    </div>
                </div>
            </div>


            <!-- toggle user Change Password -->
            <div v-show="password_toggle" class="col-sm-9">

                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">
                    <h3>Change my password</h3>
                    <div class="card-body">
                        <v-card data-app>
                            <form @submit.prevent="onEdit(getUser)" class="sign-back">

                                <v-card-title>
                                    <span class="headline">Change my password</span>
                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field label="Password" hint="Required" required>
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field label="Password confirmation" hint="Required">
                                                </v-text-field>
                                            </v-col>
                                        </v-row>

                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn color="blue darken-1" type="submit" text
                                        @click="user_toggle = true, update_toggle = false, favorite_toggle = false, ticket_toggle = false, password_toggle = false">
                                        Save</v-btn>
                                </v-card-actions>
                            </form>
                        </v-card>
                    </div>
                </div>
            </div>



            <!-- toggle user update info -->

            <div v-show="update_toggle">
                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">
                    <h3>Update your Informations</h3>
                    <div class="card-body">
                        <v-card data-app>

                            <form @submit.prevent="onEdit(getUser)" class="sign-back turc">

                                <v-card-title>
                                    <span class="headline">User Profile </span>

                                </v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12" sm="8" md="5">
                                                <v-text-field label="Firstname" hint="Required" required
                                                    v-model="getUser.firstname">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="8" md="5">
                                                <v-text-field label="Lastname" hint="Required"
                                                    v-model="getUser.lastname">
                                                </v-text-field>
                                            </v-col>


                                            <v-col cols="12" sm="5" md="5">
                                                <v-text-field label="Phone Number" hint="Required"
                                                    v-model="getUser.phone">
                                                </v-text-field>
                                            </v-col>
                                            <v-col v-if="getUser.admin == 'true'" cols="12" sm="5" md="5">
                                                <label for="admin">Admin Rights : {{getUser.admin}}</label>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" type="submit" text
                                        @click="user_toggle = true, update_toggle = false, favorite_toggle = false, ticket_toggle = false, password_toggle = false">
                                        Save</v-btn>
                                </v-card-actions>
                            </form>
                        </v-card>
                    </div>
                </div>
            </div>

            <!-- toggle user Favorite info -->
            <div v-show="favorite_toggle" class="col-sm-9">
                <div class="card card-search p-3 pt-5 pb-5 m-5 bg-blue text-light w-75 mx-auto"
                    style="background-color: rgba(0,0,0,0.6);">
                    <div class="card-body">
                        <h3>Your Favorite Concerts</h3>
                                      <div v-for="concert in JSON.parse(favorites)" :key="concert._id" class="card col-lg-4 col-sm-12"
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
    import Navbar from '../components/Navbar';

    import {
        mapActions,
        mapGetters
    } from 'vuex'


    export default {
        name:"Profile",
        data() {
            return {
                user_toggle: true,
                update_toggle: false,
                favorite_toggle: false,
                ticket_toggle: false,
                password_toggle: false,
                favorites: [],
            }
        },
        components: {
            Navbar,
   
        },

        methods: {
            ...mapActions(['fetchUser', 'fetchAllTicket', 'editUserForm']),
            logout() {
                window.localStorage.removeItem('id');
                window.localStorage.removeItem('token');
                window.location.href = "/";
            },

            onEdit(user) {

                var obj = {
                    'id': window.localStorage.getItem("id"),
                    'firstname': user.firstname,
                    'lastname': user.lastname,
                    'admin': user.admin,
                    'phone': user.phone,
                }
                console.log(obj);
                this.editUserForm(obj);
                this.fetchUser(window.localStorage.getItem("id"));
            },

        },
        computed: {
            ...mapGetters(['getUser', 'getAllTicket']),
             filteredConcertUser() {

     
          return this.getAllTicket.filter(data => data.userId.toLowerCase().includes(localStorage.getItem('id').toLowerCase()));

      
    }
        },
        created() {
            this.fetchUser(window.localStorage.getItem("id"));
            this.favorites = window.localStorage.getItem('concert');
            this.fetchAllTicket();
        }

    }
</script>

<style>
    #profile .card-search {
        background-color: rgba(0, 219, 222, 0.2);
        background-image: linear-gradient(90deg, rgba(0, 219, 222, 0.5) 0%, rgba(252, 0, 255, 0.5)100%);
        /*     position: absolute;
    top: 600px;
    left: 240px; */
        border: 0px;
    }
</style>