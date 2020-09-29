<template>
  <v-card id="Admin" v-if="token != null ">
    <v-system-bar color="teal"></v-system-bar>

    <v-app-bar
      color="teal accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Store</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>I dont know !</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

{{getUser}}
         <AdminTable />

  </v-card>
  
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'

import AdminTable from '../components/AdminTable';
  export default {
        components:{
 
      AdminTable,
    },
    methods:{

   
     ...mapActions([
       'fetchUser',
         
      ]),
       },
    data: () => ({
      drawer: false,
      group: null,
              token:localStorage.getItem('token'),
              
    }),

    watch: {
      group () {
        this.drawer = false
      },
        computed: {
      ...mapGetters([ 'getUser']),

    },
     created() {
       this.fetchUser(localStorage.getItem('id'))
       
     }
   
      
    },
  }
</script>
<style>


#Admin{
  min-height: 100vh;
}
</style>