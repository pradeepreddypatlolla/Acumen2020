<template>
  <div id="login">



    <b-form >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"

      >
        <b-form-input
          id="input-1"
          v-model="loginData.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

<label for="text-password">Password</label>
    <b-input type="password" id="text-password" v-model="loginData.password" placeholder="Enter Password" aria-describedby="password-help-block"></b-input>

    </b-form>

    <b-button v-on:click="loginsubmit()" style="margin-top:4%">Login</b-button>

     </div> 

</template>

<script>
import firebaseApp from '../firebaseinit';
import { mapMutations } from 'vuex';

export default {
    name:'login',

    data(){
        return{

            loginData:{
            email:'',
            password:''
            }

        }
    },
    methods:{

        ...mapMutations([
          'SET_LOGIN',
          'SET_USER'

        ]),

        loginsubmit(){
          console.log(this.loginData);

        firebaseApp.auth().signInWithEmailAndPassword(this.loginData.email,this.loginData.password).
        then(()=>{
            alert("Logged In");
            this.SET_LOGIN();
            this.SET_USER(this.loginData.email)
            this.$router.push('/');
        }).catch(error=>alert(error));


    }}
    

}
</script>

<style>

#login{
    margin:20%;
    border-width:1px;
}

</style>