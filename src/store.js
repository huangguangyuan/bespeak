import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let installMode = {
  state:{
    installOrdersId:[],//商品订到号ID
    fromData:{}//快速报装信息
  },
  mutations:{
    getOrdersId(state, payload){
      state.installOrdersId = payload.installOrdersId;
    },
    saveFromData(state, payload){
      state.fromData = payload.fromData;
    }
  }
}

export default new Vuex.Store({
  modules:{
    installMode
  }
})
