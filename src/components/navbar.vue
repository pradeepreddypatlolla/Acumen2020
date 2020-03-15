<template>
<div >
  <div id="Navbar" >
 <b-navbar class="navbarcss"  toggleable="lg" type="dark" variant="info">
    <b-navbar-brand router-link to='/' >ACUMEN ECE 2K20</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item router-link to='/'>Home</b-nav-item>

          <b-nav-item-dropdown text="Technical Info">
          <b-dropdown-item router-link to='/Events'>Events</b-dropdown-item>
          <b-dropdown-item >Project Expo</b-dropdown-item>
          <b-dropdown-item link="#inspire">Inspire And Ignite</b-dropdown-item>
          <b-dropdown-item link="#paper">Paper And Poster Presentations</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item  v-if="isLoggedIn" router-link to="/Profile" right>Profile</b-nav-item>
        <b-nav-item router-link to="/register" v-else id="btn" right>Register</b-nav-item>
        <b-nav-item  v-if="isLoggedIn" v-on:click="logout" right>Log Out</b-nav-item> 
        <b-nav-item router-link to="/login" v-else id="btn1" right>Login</b-nav-item> 
      </b-navbar-nav> 
    </b-collapse>
  </b-navbar>

</div>


<!-- <div id="myModal" class="modal" style="display:none">

    Modal content 
    <div class="modal-content">
      <span class="close">&times;</span>
              <div class="text-font" style="text-align: center;">REGISTER!</div>
              <form method="post">
                  
                  <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" v-model="registerData.email" name="email" aria-describedby="emailHelp" placeholder="Enter email" required>
                     
                    </div>
          
                           <div class="form-group">
                              <label for="formGroupExampleInput">First Name</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" v-model="registerData.first" name="first" placeholder="First Name" required>
                            </div>
                            <div class="form-group">
                              <label for="formGroupExampleInput">Last name</label>
                              <input type="text" class="form-control" id="formGroupExampleInput" v-model="registerData.last" name="last" placeholder="Last Name" >
                            </div>
                            
                              
                            <label for="formGroup">Gender</label>
                            <select  class="form-control" name="gender" v-model="registerData.gender" required>
                      <option selected value="male">Male</option>
                      <option value="female">Female</option>

                               
                  </select>

                                <div class="form-group">
                              <label for="formGroupExampleInput">College</label>
                              <input type="text" name="college" class="form-control" v-model="registerData.college" id="formGroupExampleInput" placeholder="College" required>
                            </div>
          
                            <label for="formGroup">Branch</label>
                            <select name="branch" class="form-control" v-model="registerData.branch" required>
                      <option value="civil">Civil</option>
                      <option value="cse">CSE</option>
                      <option selected value="ece">ECE</option>
                      <option value="eee">EEE</option>
                      <option value='it'>IT</option>
                      <option value='mechanical'>Mechanical</option>
                                
                  </select>
          
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password" class="form-control" id="inputPassword" v-model="registerData.password" placeholder="Password" required>
                    </div>
          
                    <div id="error"> </div>
                  <button type="submit" v-on:click="check()"  class="btn btn-primary btn-dark">Submit</button>
                </form>

        
    </div>
    </div>
  
  
    
  
  
    <div id="myModal1" class="modal1" style="display:none">
  <div class="modal-content" >
    <span class="close1">&times;</span>
    <span class="text-font" style="text-align: center;font-weight:600px;">LOGIN!</span>
      <form class="form-signin" method="post">
       
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" name="email" v-model="loginData.email" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" name="password" v-model="loginData.password" id="inputPassword" value="" class="form-control" placeholder="Password" required>

        
        
        <button class="btn btn-lg btn-primary btn-block btn-dark" v-on="loginsubmit()" style="width:20%" type="submit">Sign in</button>
        
      </form>
     </div> 
    </div>-->

</div>
</template>

<script>


import {mapState, mapMutations} from 'vuex';
import firebaseApp from '../firebaseinit';
// import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyBURd_9zoVtlgPOAyN2dkjrG_HM0WbNSvM",
//     authDomain: "vue-demo-84ee6.firebaseapp.com",
//     databaseURL: "https://vue-demo-84ee6.firebaseio.com",
//     projectId: "vue-demo-84ee6",
//     storageBucket: "vue-demo-84ee6.appspot.com",
//     messagingSenderId: "152461533104",
//     appId: "1:152461533104:web:f92bf9899c511e01874075",
//     measurementId: "G-DC5FW7V99K"
//   };
//   // Initialize Firebase
//         if (!firebase.apps.length) {
//           firebase.initializeApp(firebaseConfig);
//        }


  



export default {
    name:"Navbar",
    computed:mapState([
      'isLoggedIn'
    ]),

    methods:{
      ...mapMutations([
        'SET_LOGOUT',
        'RESET_COUNT',
        'RESET_EVENTS',
        'RESET_USER_DATA',
        'RESET_EXPO',
        'RESET_PAPER',
        'RESET_EXPO_TITLE',
        'RESET_PAPER_TITLE',
      ]),
      logout(){
        sessionStorage.clear();
        firebaseApp.auth().signOut().then(()=>{
          this.SET_LOGOUT();
          this.RESET_COUNT();
          this.RESET_EVENTS();
          this.RESET_USER_DATA();
          this.RESET_EXPO();
          this.RESET_PAPER();
          this.RESET_EXPO_TITLE();
          this.RESET_EXPO_TITLE();
          
          this.$router.push('/login');
        })
      }
    }

    // data(){
    //   return{

    //     registerData:{
    //       email:'',
    //       first:'',
    //       last:'',
    //       gender:'',
    //       college:'',
    //       branch:'',
    //       password:''
    //     },
    //     loginData:{
    //       email:'',
    //       password:''
    //     }


    //   }
    // },

//    methods: {
//      check(){

//     var uname = document.getElementById("inputPassword").value;
//    // document.getElementById('error').innerHTML = uname;
//     if(uname.length<8){
//         document.getElementById("error").innerHTML = "Password should be minimum 8 characters";
        
//     }
//     else{
            
//             firebase.auth().createUserWithEmailAndPassword(this.registerData.email,this.registerData.password);

//     }
// },


//      reg(){

//        var modal = document.getElementById("myModal");

  
//   // Get the button that opens the modal
  

  
  
  
//   // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
  
  
//   // When the user clicks the button, open the modal 
  
//     modal.style.display = "block";
    
  
  
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//     modal.style.display = "none";
//   }
  
  

  
  
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal ) {
//       modal.style.display = "none";
//       //modal1.style.display = "none";
//     }
//   }
//     }
//     ,

//     loginsubmit(){


//     },

//     log(){

    
  
//   var modal1 = document.getElementById("myModal1");
  
//   // Get the button that opens the modal
  
  
  
  
  
  
//   // Get the <span> element that closes the modal
  
//   var span1 = document.getElementsByClassName("close1")[0];
  
//   // When the user clicks the button, open the modal 

  
  
  
//     modal1.style.display = "block";
    
  
  
//   // When the user clicks on <span> (x), close the modal
//   span1.onclick = function() {
//     modal1.style.display = "none";
//   }
  
  
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//     if (event.target == modal1 ) {
//       modal1.style.display = "none";
//       //modal1.style.display = "none";
//     }
//   }


//     }


//    }

}
</script>

<style>
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 30px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  .modal1 {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 30px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }
  
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 100px;

    border: 1px solid #888;
    width: 70%;
  }
  
  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  /* The Close Button */
  .close1 {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .close1:hover,
  .close1:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }


</style>