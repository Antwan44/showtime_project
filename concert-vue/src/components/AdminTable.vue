<template>
  <v-card id="Admin-table"  >
    <v-toolbar flat>




      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs v-model="tabs" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1" class="teal--text">
            <v-icon>mdi-account-box</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-2" class="teal--text">
            <v-icon>mdi-music</v-icon>
          </v-tab>

          <v-tab href="#mobile-tabs-5-3" class="teal--text">
            <v-icon>mdi-cart</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item value="mobile-tabs-5-1">
        <button type="button" class="btn btn-block btn-light p-5" data-toggle="modal" data-target=".useraddmodal">+ Add a
          User</button>
        <v-card flat>
          <base-v-component heading="Simple Tables" link="components/simple-tables" />

          <base-material-card icon="mdi-clipboard-text" title="Simple Table" class="px-5 py-3">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="teal--text">
                    ID
                  </th>
                  <th class="teal--text">
                    Name
                  </th>
                  <th class="teal--text">
                    Email
                  </th>
                  <th class="teal--text">
                    Phone
                  </th>
                  <th class="teal--text">
                    Admin
                  </th>
                  <th class=" teal--text">
                    Edit
                  </th>
                  <th class=" teal--text">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="users in getAllUser" :key="users.id">
                  <td>{{users._id}}</td>
                  <td>{{users.firstname}}</td>
                  <td>{{users.email}}</td>
                  <td>{{users.phone}}</td>
                  <td>{{users.admin}}</td>
                  <td>

                    <div @click="id = users._id" data-toggle="modal" :data-target="'#exampleModal'+users._id"
                      class="bleu"><i class="far fa-edit"></i></div>


                    <div class="modal fade" :id="'exampleModal'+users._id" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <v-card data-app>
                            <form @submit.prevent="onEdit(users)" class="sign-back">

                              <v-card-title>
                                <span class="headline">User Profile</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col cols="12" sm="8" md="5">
                                      <v-text-field label="Firstname" hint="Required" required
                                        v-model="users.firstname">
                                      </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="8" md="5">
                                      <v-text-field label="Lastname" hint="Required" v-model="users.lastname">
                                      </v-text-field>
                                    </v-col>
                           
                                    <v-col cols="12" sm="5" md="5">
                                      <v-text-field label="Phone Number" hint="Required" v-model="users.phone">
                                      </v-text-field>
                                    </v-col>
                                    <label for="admin">Admin Rights</label>

                                    <select name="admin" id="admin" class="custom-select" v-model="users.admin">

                                      <option value="true">Admin</option>
                                      <option value="false">Visitor</option>

                                    </select>

                                  </v-row>

                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false" data-dismiss="modal">Close
                                </v-btn>
                                <v-btn color="blue darken-1" type="submit" text @click="dialog = false">Save</v-btn>
                              </v-card-actions>
                            </form>
                          </v-card>
                        </div>
                      </div>
                    </div>




                  </td>
                  <td> <a href="#" class="icon"><i v-on:click.prevent="onDelete(users._id)"
                        class="fas fa-trash"></i></a></td>
                </tr>


              </tbody>
            </v-simple-table>
          </base-material-card>
        </v-card>
        <!-- ADD A USER -->
        <div class="modal fade useraddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <v-card data-app>
                <form @submit.prevent="createUserSubmit" class="sign-back">        

                  <v-card-title>
                    <span class="headline">User Form</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Firstname" hint="Required" required v-model="firstname">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Lastname" hint="Required" v-model="lastname">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Email*" required v-model="email"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="Phone Number" hint="Required" v-model="phone">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="Password" hint="Required" type="password" v-model="password">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="Confirmation password" hint="Required" type="password" v-model="password_confirmation">
                          </v-text-field>
                        </v-col>
                        <label for="admin">Admin Rights</label>

                        <select name="admin" id="admin" class="custom-select" v-model="admin">

                          <option value="true">Admin</option>
                          <option value="false">Visitor</option>

                        </select>

                      </v-row>

                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false" data-dismiss="modal">Close
                    </v-btn>
                    <v-btn color="blue darken-1" type="submit" text @click="dialog = false">Create</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </div>
          </div>
        </div>


      </v-tab-item>
      <v-tab-item value="mobile-tabs-5-2">
        <button type="button" class="btn btn-block btn-light p-5" data-toggle="modal" data-target=".concertaddmodal">+ Add a
          Concert</button>
        <v-card flat>
          <base-v-component heading="Simple Tables" link="components/simple-tables" />

          <base-material-card icon="mdi-clipboard-text" title="Simple Table" class="px-5 py-3">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="teal--text">
                    ID
                  </th>
                  <th class="teal--text">
                    Title
                  </th>
                  <th class="teal--text">
                    Location
                  </th>
                  <th class="teal--text">
                    Band
                  </th>
                  <th class=" teal--text">
                    Edit
                  </th>
                  <th class=" teal--text">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="concert in getAllConcert" :key="concert.id">
                  <td>{{concert._id}}</td>
                  <td>{{concert.title}}</td>
                  <td>{{concert.location}}</td>
                  <td>{{concert.band}}</td>

                  <td>
                    <div @click="id = concert._id" data-toggle="modal" :data-target="'#exampleModal'+concert._id"
                      class="bleu"><i class="far fa-edit"></i></div>


                    <div class="modal fade" :id="'exampleModal'+concert._id" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <v-card data-app>
                            <form @submit.prevent="onEditConcert(concert)" class="sign-back">

                              <v-card-title>
                                <span class="headline">Edit Concert</span>
                              </v-card-title>
                              <v-card-text>
                                <v-container >
                                  <v-row>
                                    <v-col cols="12" sm="8" md="5">
                                      <v-text-field label="Title" hint="Required" required v-model="concert.title">
                                      </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="8" md="5">
                                      <v-text-field label="Location" hint="Required" v-model="concert.location">
                                      </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="8" md="5">
                                      <v-text-field label="Price*" required v-model="concert.price"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="5" md="5">
                                      <v-text-field label="Band" hint="Required" v-model="concert.band">
                                      </v-text-field>
                                    </v-col>
                                  
                                      <v-date-picker label="Date" hint="Required" v-model="concert.date">
                                      </v-date-picker>
                                  
                                    <v-col cols="12" md="6">
                                      <v-textarea name="Description" label="Description"
                                        v-model="concert.description"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" sm="5" md="5">
                                      <v-text-field label="Image" hint="Required" v-model="concert.image">
                                      </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="5" md="5">
                                      <v-text-field label="qrcode" hint="Required" v-model="concert.qrcode">
                                      </v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="5" md="5">
                                      <label for="genre">Genre</label>

                                      <input name="genre" id="genre" class="custom-select" v-model="concert.genre">

                                 


                           
                                    </v-col>

                                  </v-row>

                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false" data-dismiss="modal">Close
                                </v-btn>
                                <v-btn color="blue darken-1" type="submit" text @click="dialog = false">Save</v-btn>
                              </v-card-actions>
                            </form>
                          </v-card>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td> <i v-on:click.prevent="onDeleteConcert(concert._id)" class="fas fa-trash"></i></td>

                </tr>


              </tbody>
            </v-simple-table>
          </base-material-card>
        </v-card>

        <!-- ADD A CONCERT -->
        <div class="modal fade concertaddmodal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <v-card data-app>
                <form @submit="createConcert" class="sign-back">

                  <v-card-title>
                    <span class="headline">Concert Form</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Title" hint="Required" required v-model="title">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Location" hint="Required" v-model="location">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="8" md="5">
                          <v-text-field label="Price*" required v-model="price"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="Band" hint="Required" v-model="band">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <input type="date" v-model="date">
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-textarea filled name="Description" label="Description" v-model="description">
                          </v-textarea>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="Image" hint="Required" v-model="image">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <v-text-field label="qrcode" hint="Required" v-model="qrcode">
                          </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="5" md="5">
                          <label for="genre">Genre</label>

                          <input name="genre" id="genre" class="custom-select" v-model="genre">

         


                        </v-col>

                      </v-row>

                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false" data-dismiss="modal">Close
                    </v-btn>
                    <v-btn color="blue darken-1" type="submit" text @click="dialog = false">Create</v-btn>
                  </v-card-actions>
                </form>
              </v-card>
            </div>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item value="mobile-tabs-5-3">
        <v-card flat>
          <base-v-component heading="Simple Tables" link="components/simple-tables" />

          <base-material-card icon="mdi-clipboard-text" title="Simple Table" class="px-5 py-3">
            <v-simple-table>
              <thead>
                <tr>
                  <th class="teal--text">
                    ID
                  </th>
                  <th class="teal--text">
                    User
                  </th>
                  <th class="teal--text">
                    Concert
                  </th>
                  <!--    <th class="teal--text">
        Price
      </th> -->
                  <th class=" teal--text">
                    Edit
                  </th>
                  <th class=" teal--text">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="tickets in getAllTicket" :key="tickets.id">
                  <td>{{tickets._id}}</td>
                  <td>{{tickets.userId}}</td>
                  <td>{{tickets.concertId}}</td>
                  <!--       <td>Oud-Turnhout</td> -->
                  <td>
                    <i class="far fa-edit"></i>
                  </td>
                  <td> <i v-on:click.prevent="onDeleteTicket(tickets._id)" class="fas fa-trash"></i></td>

                </tr>


              </tbody>
            </v-simple-table>
          </base-material-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>






</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        tabs: null,
        dialog: false,
        id: '',
        lastname: '',
        firstname: '',
        email: '',
        admin: '',
        phone: '',
        password: '',
        password_confirmation: '',
        title:'',
        date:'',
        location:'',
        price:'',
        band:'',
        description:'',
        image:'',
        genre:'',
        qrcode:'',

      

      }
    },
    methods: {
      ...mapActions([
        'fetchAllUser', 'fetchUser', 'deleteUser','createUser','editUserForm',
        'fetchAllConcert', 'fetchConcert','deleteConcert', 'addConcert',
        'fetchAllTicket', 'deleteTicket', 'editConcert'
         
      ]),

      createUserSubmit() {

        var obj = {
          //'_id': this._id,
          'firstname': this.firstname,
          'lastname': this.lastname,
          'email': this.email,
          'phone': this.phone,
          'password': this.password,
          'password_confirmation': this.password_confirmation,
          'admin': this.admin,
        }
    
        this.createUser(obj);
        this.fetchAllUser();

      },


      onEdit(user) {

        /*         if (user.admin == 'Visitor') {
                  user.admin = false;
                } else if (user.admin == 'Admin') {
                  user.admin = true;
                } */


        var obj = {
          'id': this.id,
          'firstname': user.firstname,
          'lastname': user.lastname,
        
          'admin': user.admin,
          'phone': user.phone,

        }
            console.log(obj);
        this.editUserForm(obj);
        this.fetchAllUser();
        

      },

      createConcert() {

        var obj = {
          
          'title': this.title,
          'date': this.date,
          'location': this.location,
          'price': this.price,
          'band': this.band,
          'description': this.description,
          'image': this.image,
          'genre': this.genre,
          'qrcode': this.qrcode,
        }
        this.addConcert(obj);
        this.fetchAllConcert();

      },

      onEditConcert(concert) {

        var obj = {
          'id': this.id,
          'title': concert.title,
          'date': concert.date,
          'location': concert.location,
          'price': concert.price,
          'band': concert.band,
          'description': concert.description,
          'image': concert.image,
          'genre': concert.genre,
          'qrcode': concert.qrcode,

        }
        this.editConcert(obj);
        this.fetchAllConcert();

      },

      onDelete(id) {
 
        this.deleteUser(id)
        this.fetchAllUser();

      },
      onDeleteConcert(id) {
 
        this.deleteConcert(id)
        this.fetchAllConcert();
      },
      onDeleteTicket(id) {
     
        this.deleteTicket(id)
        this.fetchAllTicket();
      }




    },
    computed: {
      ...mapGetters(['getAllUser', 'getAllTicket', 'getAllConcert', 'getMessage', 'getUser', 'getConcert','getTicketById']),

    },
    created() {
      this.fetchAllUser();
      this.fetchAllConcert();
      this.fetchAllTicket();

    }
  }
</script>
<style scoped>



</style>