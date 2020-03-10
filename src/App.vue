<template>
<div >
<Navbar/>
<router-view/>

</div>

</template>

<script>

import Navbar from './components/navbar';

export default {
  name: 'App',
  components: {
Navbar,

  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Bungee+Inline|Julius+Sans+One|Press+Start+2P|Six+Caps&display=swap');
.navbarcss{
  background-image:linear-gradient(rgb(3, 3, 2),rgb(3, 3, 2)) ;

  font-family: 'Alegreya Sans SC', sans-serif;
}


</style>
