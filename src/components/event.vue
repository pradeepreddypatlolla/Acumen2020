<template>


<b-container>
  <b-row align-v="center">

    <eventCard v-for="event in events" :key="event.id" :name="event.name" :id="event.id" > </eventCard>

</b-row>
</b-container>

  
</template>

<script>

import eventCard from './eventCard';
import firebaseApp from '../firebaseinit';
const db=firebaseApp.firestore();
import {mapState, mapMutations} from 'vuex';
export default {
  
  name: 'Event',
  computed:mapState(['isLoggedIn']),
  components: {
eventCard
  },
  mounted(){
    this.fetchData();

    if(this.profileCount==0 && this.isLoggedIn)
{
this.INC_COUNT();
    db.collection('favEvents').where('email','==',this.email).get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
          const data=doc.data().name;
          this.ADD_EVENT(data);
         // console.log(data);
          
        })
      }
    );

        db.collection('users').get().then(
      querySnapShot=>{
        querySnapShot.forEach(doc=>{
           this.registerData.email=doc.data().email;
           this.registerData.first=doc.data().first;
           this.registerData.last=doc.data().last;
          //this.ADD_EVENT(data);
         console.log(this.registerData);
          
        })
      }
    )


  }




  },
  data(){
    return{
    events:[]
    }
  },
  methods:{
    ...mapMutations(['ADD_EVENT']),

    fetchData(){

      fetch("events.json").then(res=>res.json()).then(resJson=>this.events=resJson.events).catch(error=>console.log(error));


    }
  }
}
</script>

<style>

</style>
