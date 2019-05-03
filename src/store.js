import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let installMode = {
  state: {
    installOrdersId: [],//商品订到号ID
    fromData: {},//快速报装信息
    parkingInfo: {
      type: 'packing',
      picData: ['', '', '', ''],
      remark: ''
    },//包装图片信息
    installInfo: {
      type: 'packing',
      picData: ['', '', '', ''],
      remark: ''
    },//安装环境图片信息
  },
  mutations: {
    getOrdersId(state, payload) {
      state.installOrdersId = payload.installOrdersId;
    },
    saveFromData(state, payload) {
      state.fromData = payload.fromData;
    },
    // 保存上传的图片
    saveParkingInfo(state, payload) {
      state.parkingInfo = payload.parkingInfo
    },
    // 保存上传安装的图片
    saveInstallInfo(state, payload) {
      state.installInfo = payload.installInfo
    }
  }
}

export default new Vuex.Store({
  modules: {
    installMode
  }
})
