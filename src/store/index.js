import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lala:[],
    keyWord:''

  },
  mutations: {
    setLala(state,payload){
     state.lala=payload
    },
    setKeyword(state,pay){
    state.keyWord=pay;
    }
    // search(state){
    //   return state.lala.filter(item=>item.title.includes(item.title))
    // }
  },
  getters:{
  list(state){
    if(state.keyWord){
      return state.lala.filter(item=>item.title.includes(state.keyWord))
    }
  }
  },
  actions: {
    getList({commit}){
    axios.get("/list").then(({data})=>{
    commit("setLala",data)
    },0)
    }

  },
  modules: {
  }
})
