<template>


<b-container>
  <b-row align-v="center">

    <eventCard v-for="event in events" :key="event.id" :name="event.name" :id="event.id" > </eventCard>

</b-row>
</b-container>

  
</template>

<script>

import eventCard from './eventCard';
export default {
  
  name: 'Event',
  components: {
eventCard
  },
  mounted(){
    this.fetchData();
  },
  data(){
    return{
    events:[]
    }
  },
  methods:{
    fetchData(){

      fetch("events.json").then(res=>res.json()).then(resJson=>this.events=resJson.events).catch(error=>console.log(error));


    }
  }
}
</script>

<style>

</style>
