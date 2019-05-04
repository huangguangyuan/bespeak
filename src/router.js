import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // 快速预约
    {
      path:'/',
      name:'bespeakList',
      meta:{index:1},
      component: () => import('./views/bespeakList.vue')
    },
    // 绑定账号
    {
      path:'/binding',
      name:'binding',
      meta:{index:2},
      component: () => import('./views/Binding.vue')
    },
    // 快速预约/报装（表单）
    {
      path:'/bespeakFrom',
      name:'bespeakFrom',
      meta:{index:2},
      component: () => import('./views/bespeakFrom.vue')
    },
    // 快速预约/报装2（表单）
    {
      path:'/bespeakFrom2',
      name:'bespeakFrom2',
      meta:{index:2},
      component: () => import('./views/bespeakFrom2.vue')
    },
    // 维修预约表单
    {
      path:'/repairFrom',
      name:'repairFrom',
      meta:{index:2},
      component: () => import('./views/repairFrom.vue')
    },
    // 商品详情
    {
      path:'/commodityDetails',
      name:'commodityDetails',
      meta:{index:3},
      component: () => import('./views/commodityDetails.vue')
    },
    // 预约详情
    {
      path:'/bespeakDetails',
      name:'bespeakDetails',
      meta:{index:2},
      component: () => import('./views/bespeakDetails.vue')
    },
    // 图片上传
    {
      path:'/uploader',
      name:'uploader',
      meta:{index:3},
      component: () => import('./views/uploader.vue')
    },
    // 图片上传
    {
      path:'/uploader2',
      name:'uploader2',
      meta:{index:3},
      component: () => import('./views/uploader2.vue')
    },
    // 图片上传
    {
      path:'/uploader3',
      name:'uploader3',
      meta:{index:3},
      component: () => import('./views/uploader3.vue')
    },
    // 图片上传
    {
      path:'/evaluateFrom',
      name:'evaluateFrom',
      meta:{index:4},
      component: () => import('./views/evaluateFrom.vue')
    },
  ]
})
