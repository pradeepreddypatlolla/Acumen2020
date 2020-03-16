import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex);


export default new Vuex.Store({
    state:{

        isLoggedIn:false,
        expoBool:true,
        paperBool:true,
        email:'',
        expo_Title:'',
        paper_Title:'',

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
        },
        SET_EXPO:(state)=>{
            state.expoBool=false;
        },
        RESET_EXPO:(state)=>{
            state.expoBool=true;
        },
        ADD_EXPO_TITLE:(state,title)=>{
            state.expo_Title=title;
        },

        SET_PAPER:(state)=>{
            state.paperBool=false;
        },
        RESET_PAPER:(state)=>{
            state.paperBool=true;
        },
        ADD_PAPER_TITLE:(state,title)=>{
            state.paper_Title=title;
        },
        RESET_EXPO_TITLE:(state)=>{
            state.expo_Title='';
        },
        RESET_PAPER_TITLE:(state)=>{
            state.paper_Title='';
        }

    },


    plugins: [createPersistedState({
        storage: window.sessionStorage,
        paths: ['isLoggedIn','eventsInterested','email','profileCount','expoBool','paperBool','expo_Title','paper_Title','userData']
     })]

})