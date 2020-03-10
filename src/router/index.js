import Vue from 'vue'
import Router from 'vue-router'
import Event from '../components/event';
import MainPage from '../components/mainPage';
import Profile from '../components/profile'
Vue.use(Router)

export default new Router({
    routes:[{
        path:'/Events',
        name:'Events',
        component:Event
    },
    {
        path:'/',
        name:'Main Page',
        component:MainPage
    },
    {
        path:'/Profile',
        name:'Profile Page',
        component:Profile
    }
]

})