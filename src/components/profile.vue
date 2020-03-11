<template>
<div>
  <div v-for="event in eventsInterested" :key="event" > {{event}}</div>
  
    
        


</div>
</template>

<script>
import {mapState ,mapMutations} from 'vuex';
import firebaseApp from '../firebaseinit';
const db=firebaseApp.firestore();


export default {
    name:'Profile',
    components:{

    },

    computed:mapState([
        'eventsInterested',
        'email',
        'profileCount'
    ]),
      methods:{

    ...mapMutations([
      'ADD_EVENT',
      'INC_COUNT'

    ])

  },

      mounted(){

if(this.profileCount==0)
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
    )


  }
      },

}
</script>

<style>

</style>