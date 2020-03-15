<template>
  <div id='register'>
      <div style="text-align:center;margin-bottom:5%;font-size:20px"> REGISTER!</div>
                  
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
                              <label for="formGroupExampleInput">Phone Number</label>
                              <input type="number" name="phone" class="form-control" v-model="registerData.phone" id="formGroupExampleInput" placeholder="Phone Number" required>
                            </div>
          
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" name="password" class="form-control" id="inputPassword" v-model="registerData.password" placeholder="Password" required>
                    </div>
          
                    <div id="error"> </div>
                  <button v-on:click="check()"  class="btn btn-primary btn-dark">Submit</button>
                

  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import firebaseApp from '../firebaseinit';
const db=firebaseApp.firestore();
export default {
    name:'register',
    data(){
        return{
            registerData:{         
             email:'',
          first:'',
          last:'',
          gender:'',
          college:'',
          branch:'',
          phone:'',
          password:''
        }}
    },
    methods:{
      ...mapMutations([
        'SET_USER',
        'SET_LOGIN',

      ]),
         check(){

    var uname = document.getElementById("inputPassword").value;
   // document.getElementById('error').innerHTML = uname;
    if(uname.length<8){
        document.getElementById("error").innerHTML = "Password should be minimum 8 characters";
        
    }
    else{
            console.log(this.registerData);
            firebaseApp.auth().createUserWithEmailAndPassword(this.registerData.email,this.registerData.password).
            then(()=>{
              db.collection('users').add(this.registerData);
              this.SET_USER(this.registerData.email);
              this.SET_LOGIN();
                alert("Resgistered Successfully");

                this.$router.push('/');
            }).catch(error=>alert(error));

    }
}
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Bellota+Text&display=swap');
#register{
    padding-top:5% ;
    padding-left: 20%;
        padding-right: 20%;
font-family: 'Bellota Text', cursive;
        
    
}
</style>