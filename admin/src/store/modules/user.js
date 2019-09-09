import axios from "axios";
import api from '../../api/user'
//set states
const state = {
    users: {}
}

//set getters
const getters = {
    userData: state => {
        return state.users; //return states value
    }
}

//set mutations
const mutations = {
    userInfo: (state, payload) => {
        state.users = payload; //set new state value
    },
    auth_success: (state,user) => {
        state.token = token
    },
    getUserById: (state, user) => {
        state.users = user
    }
}

//set actions 
const actions = {
    userInfo: ({ commit }, payload) => {
        commit('userInfo', payload); //commit take argument as actions and payload data
    },
    auth_success: ({commit},user) => {
        commit('auth_success', token)
    },
    getUser: (context) => {
        axios.get('/user/profile')
        .then(response => {
            context.commit('userInfo', response.data)
        })
    },
    getUserById: ({commit}, userId) => {
        axios.get('/user/' + userId)
         .then(response => {
             commit('getUserById', response.data.userData)
         })
    }
}

//export the user store
export default {
    state,
    getters,
    mutations,
    actions
}