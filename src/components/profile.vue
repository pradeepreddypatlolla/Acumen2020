<template>
<div>
  <div v-for="event in eventsInterested" :key="event" > {{event}}</div>
  
    
        


</div>
</template>

<script>
import {mapState} from 'vuex';


export default {
    name:'Profile',
    components:{

    },

    computed:mapState([
        'eventsInterested'
    ])

}
</script>

<style>

</style>