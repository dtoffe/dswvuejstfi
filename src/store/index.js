import Vue from 'vue'
import Vuex from 'vuex'
import http  from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
    posts: [],
    selectedUserId: null,
  },
  getters: {
    users(state){
      return state.users
    },
    posts(state){
      return state.posts
    },
    selectedUserId(state) {
      return state.selectedUserId
    }
  },
  mutations: {
    setUsers(state, value){
      state.users = value
    },
    setPosts(state, value){
      state.posts = value
    },
    setSelectedUserId(state, value) {
      state.selectedUserId = value
    },
  },
  actions: {
    async fetchUsers({commit}){
      try {
        const response = await http.get(
          `https://jsonplaceholder.typicode.com/users`,
          {params: null}
        );
        commit('setUsers', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPosts({commit}){
      try {
        const response = await http.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.selectedUserId}/posts`,
          {params: this.state.selectedUserId}
        );
        commit('setPosts', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    setSelectedUserId({commit}, value) {
      commit('setSelectedUserId', value)
    },
  }
})
