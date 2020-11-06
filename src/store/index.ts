//1.导入vuex和vue
import Vuex from 'vuex'
import Vue from 'vue'
import ActionHelper from './ActionHelper';

//2.注册vuex到vue里面
Vue.use(Vuex);

//3.创建vuex的仓库对象 state -共享对象和数据， mutations -共享方法
let store = new Vuex.Store({
  state: {
    isShow: false,
    aHelper: new ActionHelper(),
    transMemo: null,//传递数据的桥梁
    filterCateId: -1,//筛选分类id
  },
  mutations: {
    showEditMemo(state: any, editMemo: any) {
      state.transMemo = editMemo
      state.isShow = true
    }
  }
});

//4.导入仓库对象
export default store;
