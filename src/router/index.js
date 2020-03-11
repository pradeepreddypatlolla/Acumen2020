import Vue from 'vue'
import Router from 'vue-router'
import Event from '../components/event';
import MainPage from '../components/mainPage';
import Profile from '../components/profile'
import Login from '../components/login';
import Register from '../components/register';
import firebase from 'firebase';
Vue.use(Router)

let router =new Router({
    routes:[{
        path:'/Events',
        name:'Events',
        component:Event,

    },
    {
        path:'/login',
        name:'login',
        component:Login,
        meta:{
            requiresGuest:true
        }
    },
    {
        path:'/register',
        name:'register',
        component:Register,
        meta:{
            requiresGuest:true
        }
    },
    {
        path:'/',
        name:'Main Page',
        component:MainPage,

    },
    {
        path:'/Profile',
        name:'Profile Page',
        component:Profile,
        meta:{
            requiresAuth:true
        }
    }
]

})

router.beforeEach((to,from,next)=>{
     if(to.matched.some(record=>record.meta.requiresAuth)){

        if(!firebase.auth().currentUser){

            next({
                path:'/login',
                query:{
                    redirect:to.fullPath
                }
            })
        }
        else{
            next();
        }

     }
     
     else{
         next();
     }

})

export default router;
