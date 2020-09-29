<template>
 <div class="ticket" v-if="getTicketById.userId == id">
<Navbar />
<div class="text-center">
<h1> Votre Resa </h1>
<p> Numero de Resa : {{getTicketById._id}}  </p>
<p> Concert : {{concert.title}}</p>
<img :src="concert.image">
<p> User : {{getUser.firstname}}  </p>
</div>

 
<div>

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
 name:"ticket",
 data() {
 return {
     id: localStorage.getItem('id'),
     concert:"",
    
 }
 },
 methods:{
         ...mapActions(['fetchUser','fetchTicketById','fetchConcertById']),
 },
  computed: {
            ...mapGetters(['getUser','getTicketById','getConcertById']),
        },
        created(){
        this.fetchTicketById(this.$route.params.id);
        this.fetchUser(window.localStorage.getItem("id"));
        console.log(this.getTicketById);
        this.fetchConcertById(this.getTicketById.concertId);
         this.concert= this.getConcertById;
  
        },
        mounted(){
      
        this.fetchConcertById(this.getTicketById.concertId);
        this.concert= this.getConcertById;
        },
       
       
 components:{
 Navbar,

 }
 }
</script>
 
<style scoped>
 
.ticket{
 min-height: 100vh;
}
 
</style>