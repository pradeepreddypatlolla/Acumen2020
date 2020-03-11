import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{

        isLoggedIn:false,
        email:'',

        eventsInterested:[],
        profileCount:0,


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
            state.eventsInterested.splice(name,1);
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


    }


})