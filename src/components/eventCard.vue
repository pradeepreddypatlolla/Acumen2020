<template>
  
<div>

   
<b-col >
  <b-card
    :title="name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; margin:2%"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary" v-if="check(name,eventsInterested)" v-on:click="remove(name)" >Not Interested</b-button>
    <b-button href="#" variant="primary" v-else v-on:click="add(name)" >Interested</b-button>

    
  </b-card>
  </b-col>
</div>

</template>

<script>
import firebaseApp from '../firebaseinit';
const db=firebaseApp.firestore();
import {mapState ,mapMutations } from 'vuex';
export default {
    name:"eventCard",
    props:["name","id"],
    computed:
    mapState([
        'eventsInterested',
        'isLoggedIn',
        'email'
    ]),
    data(){
        return{
            eventsI:this.eventsInterested,
            name1:this.name

        }
    },

    methods:{
        check(name,eventsInterested){
            for(var i=0;i< eventsInterested.length;i++){
                if(name==eventsInterested[i]){
                    return true;
                }
            }
            return false;
        },

        ...mapMutations([
            'REMOVE_EVENT',
            'ADD_EVENT'
        ])
        ,

        remove(name){
            if(this.isLoggedIn)
            {
            this.REMOVE_EVENT(name);
            db.collection('favEvents').where('email','==',this.email).where('name','==',name).
            get().then((querySnapShot)=>{
                querySnapShot.forEach((doc)=>{
                    doc.ref.delete();
                    
                })
            })
            }
            else{
                alert("You have to Register first!");
                this.$router.push('./register');
            }
            //console.log(this.props.name);
        },
        add(name){

            if(this.isLoggedIn)
            { 
                this.ADD_EVENT(name);
                db.collection('favEvents').add({email:this.email,name:name})
            
            }
            else{
                alert("You have to Register first!");
                this.$router.push('./register');
            }

            
        }
    }


}
//console.log(eventsInterested);
</script>

<style>

</style>