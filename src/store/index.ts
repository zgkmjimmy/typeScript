//1.导入vuex和vue
import Vuex from 'vuex'
import Vue from 'vue'

//2.注册vuex到vue里面
Vue.use(Vuex);

//3.创建vuex的仓库对象 state -共享对象和数据， mutations -共享方法
let store = new Vuex.Store({
  state: {

  },
  mutations: {

  }
});

//4.导入仓库对象
export default store;
