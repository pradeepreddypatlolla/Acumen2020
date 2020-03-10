import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{

        isLoggedIn:true,
        eventsInterested:[],

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
        }


    }


})