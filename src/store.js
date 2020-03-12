import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);


export default new Vuex.Store({
    state:{

        isLoggedIn:false,
        email:'',

        eventsInterested:[],
        profileCount:0,
        userData:{
            email:'',
            first:'',
            last:'',
            gender:'',
            college:'',
            branch:'',
            phone:'',
            password:''
        }


    },
    getters:{

    },
    actions:{

    },
    mutations:{

        ADD_EVENT:(state,name)=>{
            state.eventsInterested.push(name);
        },
        REMOVE_EVENT:(state,name)=>{
            const index=state.eventsInterested.indexOf(name);
            state.eventsInterested.splice(index,1);
        },
        
        SET_LOGIN:(state)=>{
            state.isLoggedIn=true;
        },
        SET_LOGOUT:(state)=>{
            state.isLoggedIn=false;
        },

        SET_USER:(state,email)=>{
            state.email=email;
        },
        INC_COUNT:(state)=>{
            state.profileCount++;
        },
        RESET_COUNT:(state)=>{
            state.profileCount=0;
        },
        RESET_EVENTS:(state)=>{
            state.eventsInterested=[]
        },
        SET_USER_DATA:(state,data)=>{
            state.userData.email=data.email;
            state.userData.first=data.first;
            state.userData.last=data.last;
            state.userData.college=data.college;
            state.userData.branch=data.branch;
            state.userData.phone=data.phone;
        },
        RESET_USER_DATA:(state)=>{
            state.userData.email="";
            state.userData.first="";
            state.userData.last="";
            state.userData.college="";
            state.userData.branch="";
            state.userData.phone="";
        }

    },


    plugins: [createPersistedState({
        storage: window.sessionStorage,
        paths: ['isLoggedIn','eventsInterested','email','profileCount']
     })]

})