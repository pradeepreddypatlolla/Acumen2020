<template>
<div id="profile">
  <div >  Welcome {{userData.first}} {{userData.last}}  </div>
  <div>YOUR PROFILE</div>

  <div >   {{userData.college}}   </div>
  <div >  {{userData.branch}}  </div>
<div v-if='eventsInterested.length'>
  <div >  Your Interested Events are:  </div>
  <div  v-for="event in eventsInterested" :key="event" > {{event}}</div>
</div>

  <div v-if="!expoBool">
    Your Title for Project Expo : {{expo_Title}}
  </div>
    <div v-if="!paperBool">
    Your Title for Presentations : {{paper_Title}}
  </div>
  
 
        


</div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex';
// import firebaseApp from '../firebaseinit';
// // const db=firebaseApp.firestore();


export default {
    name:'Profile',
    components:{

    },

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
        }

      }
    },

    computed:mapState([
        'eventsInterested',
        'email',
        'profileCount',
        'userData',
        'expo_Title',
        'paper_Title',
        'paperBool',
        'expoBool'
    ]),
      methods:{

    ...mapMutations([
      'ADD_EVENT',
      'INC_COUNT',
      'SET_USER_DATA',

    ])

  },

//       mounted(){





// if(this.profileCount==0)
// {
// this.INC_COUNT();
//     console.log("hello");
//     db.collection('favEvents').where('email','==',this.email).get().then(
//       querySnapShot=>{
//         querySnapShot.forEach(doc=>{
//            const data=doc.data().name;
//           this.ADD_EVENT(data);
//          // console.log(data);
          
//         })
//       }
//     )

//     console.log("hello");

//                 db.collection('users').where('email','==',this.email).get().then(
//       querySnapShot=>{
//         querySnapShot.forEach(doc=>{
//            const data=doc.data();
//            this.SET_USER_DATA(data);
          
//           //this.ADD_EVENT(data);
//          console.log(data);
          
//         })
//       }
//     )




//   }
//       },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Bungee+Inline|Julius+Sans+One|Press+Start+2P|Six+Caps&display=swap');

#profile{
  font-family: 'Alegreya Sans SC', sans-serif;
  text-align: center;
  margin:10%;
}

</style>