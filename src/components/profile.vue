<template>
<div class="row">
  <div class="col"> <h2> Welcome {{userData.first}} {{userData.last}} </h2> </div>

  <div class="col"> <h2>  {{userData.college}}  </h2> </div>
  <div class="col"> <h2> {{userData.branch}}  </h2> </div>

  <div class="row"> <h2> Your Interested Events are: </h2> </div>
  <div class="col" v-for="event in eventsInterested" :key="event" > {{event}}</div>
  
 
        


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
        'userData'
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

</style>