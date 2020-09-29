const token = window.localStorage.getItem('token') || "";

const state = {

    tickets:[],
    ticketById:[],
    newTicket:'',

}
const getters = {

    getAllTicket:(state) =>(state.tickets),
    getTicketById:(state) =>(state.ticketById),
    getNewTicket:(state)=> (state.newTicket),
    getEraseTicket:(state)=> (state.EraseTicket),
    getEditTicket:(state)=> (state.EditTicket),
}
const actions = {

    //FETCH ALL TICKETS


    async fetchAllTicket({commit}){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}` );
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:3000/tickets", requestOptions)
  .then(response => response.json())
  .then(result => commit('fetchAllTicket',result))
  .catch(error => console.log('error', error));
    },

    //FETCH TICKET BY ID

    async fetchTicketById({commit},id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}` );
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        
        redirect: 'follow'
        };

        fetch(`http://localhost:3000/tickets/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          commit('TicketById',result);

        })
        .catch(error => console.log('error', error));
            },


    //ADD A ticket

    async addTicket({commit}, obj){

      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}` );
      myHeaders.append('Content-Type','application/json');
      var raw=JSON.stringify({"userId":obj.userId,"concertId":obj.concertId});

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

      fetch("http://localhost:3000/tickets", requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('addTicketMessage',result)
                 window.location.href=`/qrcode/${result._id}`; 
       
      })
      .catch(error => console.log('error', error));
      },

 
  //UPDATE A Ticket

  async updateticket({commit}, ticket){


  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}` );

var raw = JSON.stringify({
  "userID": ticket.userID,
  "concertID": ticket.concertID
});
var requestOptions = {
method: 'PUT',
headers: myHeaders,
body: raw,
redirect: 'follow'
};

fetch(`http://localhost:3000/tickets/${ticket.id}`, requestOptions)
.then(response => response.text())
.then(result => commit('Updateticket',result))
.catch(error => console.log('error', error));

}, 

  //DELETE A ticket


  async deleteTicket({commit}, id){


  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${token}` );
var requestOptions = {
method: 'DELETE',
headers: myHeaders,
redirect: 'follow'
};

fetch(`http://localhost:3000/tickets/${id}`, requestOptions)
.then(response => response.json())
.then(result => commit('DeleteTicket',result))
.catch(error => console.log('error', error));
},




}

const mutations = {

    fetchAllTicket:(state,tickets) => (state.tickets = tickets),
    TicketById:(state,ticketById) => (state.ticketById = ticketById),
    addTicketMessage:(state,newTicket)=>(state.newTicket = newTicket),
    DeleteTicket: (state,EraseTicket)=>(state.EraseTicket = EraseTicket),
    UpdateTicket:(state,EditTicket)=>(state.EditTicket = EditTicket),


}



export default{
    state,
    getters,
    actions,
    mutations,
}