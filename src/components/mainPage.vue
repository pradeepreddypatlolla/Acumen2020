<template>
<div id="MainPage">


<Corosal/>

 <div  id="about" >
    <div style="font-size:30px">About Acumen </div>
    <router-link to="/">
      <div>
   ACUMEN is a one-day festival. The event seeks to achieve communication of innovative ideas that promote the cause of the technological advantage among the students, and also keep them abreast with the latest advances in their respective fields. It also opens a window to the participants to interact with people from different backgrounds and upgrade their knowledge.
        </div>
    </router-link>  </div>



    <div id="inspire" >
      <div style="font-size:30px">Inspire and Ignite </div>
      <router-link to="/">
        <div>
      Even those of us with the most positive attitudes need a few words of wisdom now and then to reignite our passions and inspire us to do what we were put on this Earth to achieve. While some of us may have more obstacles in our way, we all have the opportunity to achieve our goals and do big things with our lives.
        </div> </router-link>  </div> 
<div id="expo" >
  <div style="font-size:30px">Project Expo</div>

<router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> 
 <div v-if="expoBool" style="font-size:20px;margin-top:2%" v-on:click="expoFormOpen()">Interested? Click here to register</div>
 <div v-else style="font-size:20px;margin-top:2%">Registered</div>
 <div id="expoForm" >
 <input type="text" placeholder="Title" v-model="expoTitle"> <b-button v-on:click="expoFormSubmit()" >Submit</b-button>
 </div>
 </router-link> </div>
  <div id="paper">
    
   <div style="font-size:25px">Paper and poster presentations</div>

   <router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> 
 <div v-if="paperBool" style="font-size:20px;margin-top:2%" v-on:click="paperFormOpen()">Interested? Click here to register</div>
 <div v-else style="font-size:20px;margin-top:2%">Registered</div>
 <div id="paperForm" >
 <input type="text" placeholder="Title" v-model="expoTitle"> <b-button v-on:click="paperFormSubmit()" >Submit</b-button>
 </div>
 
 
 </router-link>


    </div>  
    
    <div id="events">
      <router-link to="/Events" > 
        <div>
<div style="font-size:30px">Events</div>
<div> This Year 16 Events are being conducted. </div>
<div style="font-size:20px;margin-top:2%">Interested? Click to learn more</div>
</div></router-link>
</div>
  


<div id="sponsor">

 <div style="font-size:30px"> sponsors </div>

 <router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> </router-link>

</div>

<div id="social">
  
<div style="text-align:center" >Follow Us On </div>
 <div style="margin-left:27%">
  <a href="#" class="fa fa-facebook"></a>
  <a href="#" class="fa fa-instagram"></a>
  <a href="#" class="fa fa-snapchat-ghost"></a>

</div>
<div style="text-align:center;font-size:10px"> Department of ECE. Vasavi College of Engineering </div>
</div>
</div>








</template>

<script>


import firebaseApp from '../firebaseinit';
const db=firebaseApp.firestore();
import Corosal from './corosal';
import { mapState,mapMutations } from 'vuex';
export default {
  name: 'MainPage',
  computed:mapState([
    'isLoggedIn',
    'userData',
            'eventsInterested',
        'email',
        'profileCount',
        'expoBool',
        'paperBool'
  ]),
  data(){
    return{
      favEvents:[],
      expoTitle:'',
      paperTitle:'',
    }
  },


  components: {

Corosal
  },


methods:{

    ...mapMutations([
      'ADD_EVENT',
      'INC_COUNT',
      'SET_USER_DATA',
      'ADD_EXPO_TITLE',
      'SET_EXPO',
      'ADD_PAPER_TITLE',
      'SET_PAPER',
      

    ]),

expoFormOpen(){

  if(this.isLoggedIn){

  document.getElementById('expoForm').style.display='block';
  }
  else{
    alert('You have to register to the website first!');
    this.$router.push('./register');
  }
},
expoFormSubmit()
{
  const obj={
    email:this.email,
    title:this.expoTitle,
  }
  db.collection('expo').add(obj).then(()=>{

alert('REGISTERED FOR PROJECT EXPO');
document.getElementById('expoForm').style.display='none';
  this.$router.push('/');
  this.SET_EXPO();
  this.SET_EXPO_TITLE(this.expoTitle);
  }).catch(error=>alert(error));
  
},


paperFormOpen(){

  if(this.isLoggedIn){

  document.getElementById('paperForm').style.display='block';
  }
  else{
    alert('You have to register to the website first!');
    this.$router.push('./register');
  }
},
paperFormSubmit()
{
  const obj1={
    email:this.email,
    title:this.paperTitle,
  }
  db.collection('paper').add(obj1).then(()=>{

alert('REGISTERED FOR PRESENTATIONS');
document.getElementById('paperForm').style.display='none';
  this.$router.push('/');

  this.SET_PAPER();
  this.SET_PAPER_TITLE(this.paperTitle);
  }).catch(error=>alert(error));
  
}




},

  mounted(){

    
if(this.profileCount==0 && this.isLoggedIn)
{
this.INC_COUNT();
    console.log("hello");
    db.collection('favEvents').where('email','==',this.email).get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
           const data=doc.data().name;
          this.ADD_EVENT(data);
          console.log(data);
          
        })
      }
    )

    db.collection('expo').where('email','==',this.email).get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
          const expo_title=doc.data().title;
          if(expo_title!=undefined){
          this.ADD_EXPO_TITLE(expo_title);
          this.SET_EXPO();
          }
        })
      }
    )

        db.collection('paper').where('email','==',this.email).get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
          const paper_title=doc.data().title;
          if(paper_title!=undefined){
          this.ADD_PAPER_TITLE(paper_title);
          this.SET_PAPER();
          }
        })
      }
    )

    console.log("hello");

                db.collection('users').where('email','==',this.email).get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
           const data=doc.data();
           this.SET_USER_DATA(data);
          
          //this.ADD_EVENT(data);
         console.log(data);
          
        })
      }
    )




  }




  }
}




</script>


<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Bungee+Inline|Julius+Sans+One|Press+Start+2P|Six+Caps&display=swap');
.navbarcss{
  background-image:linear-gradient(rgb(3, 3, 2),rgb(3, 3, 2)) ;

  font-family: 'Alegreya Sans SC', sans-serif;
}

.fa {
  padding: 20px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  
  color: white;
}


.fa-instagram {
  
  color: white;
}

.fa-snapchat-ghost {

  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

#expoForm{
  display: none;
}
#paperForm{
  display: none;
}

#event{
      padding: 5%;
    width:100%;
    height: 20%;
    

    
    background-color:rgb(255, 255, 255);

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
}

#about{
      

    padding: 5%;
    width:100%;
    height: 20%;


    
    background-color:white;

    text-align: justify;

    color:#000000;
    
    font-family: 'Julius Sans One', sans-serif;

    

  }
  #about:hover{
      opacity:50%;
  }
  #social:hover{
    opacity:50%;
}
#inspire:hover{
    opacity:50%;
}
#expo:hover{
  opacity:50%;
}

#paper:hover{
    opacity:50%;
}
#sponsor:hover{
  opacity:50%;
}

#events:hover{
    opacity:50%;
  }
  
  #expo{
    padding: 5%;
    width:100%;
    height: 20%;
    

    
    background-color:white;

    text-align: justify;

    color:rgb(0, 0, 0);
    
    font-family: 'Julius Sans One', sans-serif;
      
  }

  #inspire{
    padding: 5%;
    width:100%;
    height: 20%;
    

    
    background-color:lightgray;

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #events{
    padding: 5%;
    width:100%;
    height: 20%;
    

    
    background-color:rgb(255, 255, 255);

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #paper{
    padding: 5%;
    width:100%;
    height: 20%;


    
    background-color:lightgray;

    text-align: justify;

    color:rgb(10, 10, 10);
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #corosal{


    
    opacity: 50%;

    font-family: 'Press Start 2P', cursive;


  }
  #sponsor{
    padding: 5%;
    width:100%;
    height: 20%;


    
    background-color:lightgray;

    text-align: justify;

    color:rgb(10, 10, 10);
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #social{
    padding: 5%;
    width:100%;
    height: 10%;


    
    background-color:rgb(7, 7, 7);

    text-align: justify;

    color:rgb(250, 248, 248);
    
    font-family: 'Julius Sans One', sans-serif;
  }
  
  
  #text-color{
    color:#ffffff;
  }
  .text-color{
    color:#ffffff;
  }
  #but{
      margin-right: 2%;
      margin-bottom: 2%;
  }
  a{
      text-decoration: none!important;
      color:#000;
  }

  .text-font{
    font-family: 'Julius Sans One', sans-serif;

  }
  

</style>
