<template>
<div id="MainPage">


<Corosal/>

 <div  id="about" >
    <div>About Acumen </div>
    <router-link to="/">
      <div>
   ACUMEN is a one-day festival. The event seeks to achieve communication of innovative ideas that promote the cause of the technological advantage among the students, and also keep them abreast with the latest advances in their respective fields. It also opens a window to the participants to interact with people from different backgrounds and upgrade their knowledge.
        </div>
    </router-link>  </div>



    <div id="inspire" >
      <div>Inspire and Ignite </div>
      <router-link to="/">
        <div>
      Even those of us with the most positive attitudes need a few words of wisdom now and then to reignite our passions and inspire us to do what we were put on this Earth to achieve. While some of us may have more obstacles in our way, we all have the opportunity to achieve our goals and do big things with our lives.
        </div> </router-link>  </div> 
<div id="expo" >
  <div>Project Expo</div>

<router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> </router-link> </div>
  <div id="paper">
    
   <div> Paper and poster presentations </div>

   <router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> </router-link>


    </div>  
    
    <div id="events">
      <router-link to="/Events" > 
        <div>
<div>Events</div>
<div> This Year 16 Events are being conducted. </div>
</div></router-link>
</div>
  


<div id="sponsor">

 <div> sponsors </div>

 <router-link to='/'><div>
  Project Expo is a technical event in which the participants      should prepare  their project at home and they have to  bring the project to demonstrate before the judges.
There is only one round and the best is chosen by the judges and the respective prizes are given away.
 </div> </router-link>

</div>

<div id="social">
  Social Media icons
</div>

</div>








</template>

<script>



import Corosal from './corosal';
export default {
  name: 'MainPage',
  data(){
    return{
      favEvents:[]
    }
  },


  components: {

Corosal
  },



}

</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC|Bungee+Inline|Julius+Sans+One|Press+Start+2P|Six+Caps&display=swap');
.navbarcss{
  background-image:linear-gradient(rgb(3, 3, 2),rgb(3, 3, 2)) ;

  font-family: 'Alegreya Sans SC', sans-serif;
}
#event{
      padding: 5%;
    width:100%;
    height: 300px;
    

    
    background-color:rgb(255, 255, 255);

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
}

#about{
      

    padding: 5%;
    width:100%;
    height: 300px;


    
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
    height: 300px;
    

    
    background-color:white;

    text-align: justify;

    color:rgb(0, 0, 0);
    
    font-family: 'Julius Sans One', sans-serif;
      
  }

  #inspire{
    padding: 5%;
    width:100%;
    height: 300px;
    

    
    background-color:lightgray;

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #events{
    padding: 5%;
    width:100%;
    height: 300px;
    

    
    background-color:rgb(255, 255, 255);

    text-align: justify;

    color:#050505;
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #paper{
    padding: 5%;
    width:100%;
    height: 300px;


    
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
    height: 300px;


    
    background-color:lightgray;

    text-align: justify;

    color:rgb(10, 10, 10);
    
    font-family: 'Julius Sans One', sans-serif;
  }
  #social{
    padding: 5%;
    width:100%;
    height: 100px;


    
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
