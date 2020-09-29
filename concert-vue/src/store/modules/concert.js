const token = window.localStorage.getItem('token') || ""; 
var url = `http://localhost:3000`;

const state = {

  concerts:[],
  concertId: [],
  editConcert:[],
}
const getters = {

  getAllConcert:(state) =>(state.concerts),
  getConcertById:(state) =>(state.concertId), 
  deleteConcertById:(state)=>(state.deleteConcertById),
  getConcert:(state) =>(state.ConcertById),
  getConcertEdit:(state)=>(state.editConcert),
}
const actions = {

  // FETCH ALL CONCERTS
  async fetchAllConcert({commit}){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};

fetch(`${url}/concerts`, requestOptions)
.then(response => response.json())
.then(result => commit('fetchAllConcert',result))
.catch(error => console.log('error', error));
  },

  async fetchConcertById({commit},id){
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`http://localhost:3000/concerts/${id}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      
      commit('fetchConcertById',result)
    
    })
    .catch(error => console.log('error', error));
      }, 

// FETCH CONCERT BY ID
async fetchConcert({commit},id){
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
  redirect: 'follow'
  };

  fetch(`${url}/concerts/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    commit('ConcertById',result);
   

  })
  .catch(error => console.log('error', error));
      },


//ADD A CONCERT

async addConcert({commit}, obj){

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}` );
  myHeaders.append('Content-Type','application/json');
  var raw=JSON.stringify({
    "title":obj.title,
    "date":obj.date,
    "location":obj.location,
    "price":obj.price,
    "band":obj.band,
    "description":obj.description,
    "image":obj.image,
    "genre":obj.genre,
    "qrcode":obj.qrcode
  });

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
  };

  fetch(`${url}/concerts`, requestOptions)
  .then(response => response.json())
  .then(result => {
    commit('AddConcert',result)
    location.reload();
  })
  .catch(error => console.log('error', error));
  },

      // DELETE CONCERT BY ID
async deleteConcert({commit},id){
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  
  var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  
  redirect: 'follow'
  };
  
  fetch(`${url}/concerts/${id}`, requestOptions)
  .then(response => response.json())
  .then(result => {
  commit('deleteConcertById',result);
  location.reload();
  })
  .catch(error => console.log('error', error));
  },

                  /* EDIT CONCERT
 */  async editConcert({commit},obj){
    var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${token}`);
    
          myHeaders.append('Content-Type','application/json');
          var raw = JSON.stringify({"date":obj.date,"qrcode":obj.qrcode,"title":obj.title,"location":obj.location,"genre":obj.genre,"band":obj.band,"description":obj.description,"image":obj.image});
    
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${url}/concerts/${obj.id}`, requestOptions)
      .then(response => response.json())
      .then(result =>  {
          commit('updateMessage',result);
          location.reload();
         
        })
      .catch(error => console.log('error', error));
    },
}

const mutations = {

  fetchAllConcert:(state,concerts) => (state.concerts = concerts),
  fetchConcertById:(state,concertId) =>(state.concertId = concertId), 
  deleteConcertById:(state,deleteConcertById)=>(state.deleteConcertById = deleteConcertById),    
  ConcertById:(state,ConcertById)=>(state.ConcertById = ConcertById),
  AddConcert:(state,NewConcert)=>(state.NewConcert = NewConcert),
}



export default{
  state,
  getters,
  actions,
  mutations,
}
