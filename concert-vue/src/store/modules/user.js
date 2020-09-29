const token = window.localStorage.getItem('token') || "";  
var url = `http://localhost:3000`;

const state = {

  users:[],
  login:[],
  register:[],

  UserById:[],
  deleteUserById:[], 
  message:[],
  createmessage:[],


}
const getters = {

  getAllUser:(state) =>(state.users),
  getLogin:(state) => (state.login),
  getRegister:(state) =>(state.register),   
  getUser:(state) =>(state.UserById),
  deleteUserById:(state)=>(state.deleteUserById),
  getMessage:(state) =>(state.message),
  getUpdateMessage:(state)=>(state.updatemessage),
  getCreateMessage:(state)=>(state.createmessage),
}
const actions = {

                                                                          /* ====== FETCH ALL USER ======= */
async fetchAllUser({commit}){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}` );
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://localhost:3000/users", requestOptions)
        .then(response => response.json())
        .then(result => commit('fetchAllUser',result))
        .catch(error => console.log('error', error));
          },

                                                                          /* ====== LOGIN ======= */
  async loginForm({commit},obj){
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({"email":obj.email,"password":obj.password});

          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
          };


      fetch("http://localhost:3000/auth", requestOptions)
      .then(response => response.json())
      .then(result =>  {
          commit('loginMessage',result);
     
          window.localStorage.setItem('token',result.token.token);
          window.localStorage.setItem('id',result.user._id);
          if(!result.message){
            window.location.href="/";
          }
        })
      .catch(error => console.log('error', error));
  },
                                                                         /* ====== REGISTER ======= */

async register({commit},obj){
      var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({"email":obj.email,"password":obj.password,"password_confirmation":obj.password_confirmation,"phone":obj.phone,"firstname":obj.firstname,"lastname":obj.lastname});

          var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
          };

          fetch("http://localhost:3000/users", requestOptions)
          .then(response => response.json())
          .then(result => {
              commit('registerMessage',result);
              if(!result.message){
                  window.location.href="/";
                }
          
          })
          .catch(error => console.log('error', error));
              },


// CREATE USER 
async createUser({commit},obj){
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({"email":obj.email,"password":obj.password,"password_confirmation":obj.password_confirmation,"phone":obj.phone,"firstname":obj.firstname,"lastname":obj.lastname});



var requestOptions = {
  method: 'POST',
  body: raw,
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${url}/users`, requestOptions)
  .then(response => response.json())
  .then(result =>  {
      commit('createMessage',result);
      location.reload();
     
    })
  .catch(error => console.log('error', error));
},

// EDIT USER 
async editUserForm({commit},obj){
var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      myHeaders.append('Content-Type','application/json');
      var raw=JSON.stringify({"phone":obj.phone,"firstname":obj.firstname,"lastname":obj.lastname,"admin":obj.admin});


var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch(`${url}/users/${obj.id}`, requestOptions)
  .then(response => response.json())
  .then(result =>  {
      commit('updateMessage',result);
      location.reload();
     
    })
  .catch(error => console.log('error', error));
},

// FETCH USER BY ID
async fetchUser({commit},id){
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
method: 'GET',
headers: myHeaders,

redirect: 'follow'
};

fetch(`${url}/users/${id}`, requestOptions)
.then(response => response.json())
.then(result => {
  commit('UserById',result);
 

})
.catch(error => console.log('error', error));
    },

// DELETE USER BY ID
async deleteUser({commit},id){
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
method: 'DELETE',
headers: myHeaders,

redirect: 'follow'
};

fetch(`${url}/users/${id}`, requestOptions)
.then(response => response.json())
.then(result => {
commit('deleteUserById',result);
location.reload();
})
.catch(error => console.log('error', error));
},



}



const mutations = {
  loginMessage:(state,login) =>(state.login = login),
  fetchAllUser:(state,users) => (state.users = users),
  registerMessage:(state,register)=>(state.register = register),

  UserById:(state,UserById)=>(state.UserById = UserById),
  deleteUserById:(state,deleteUserById)=>(state.deleteUserById = deleteUserById),    
  createMessage:(state,createmessage)=>(state.createmessage = createmessage),
  updateMessage:(state,updatemessage)=>(state.updatemessage = updatemessage),
}



export default{
  state,
  getters,
  actions,
  mutations,
}