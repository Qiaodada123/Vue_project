import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		headTitle:'登录',
		detailData:null

	},
	actions:{
		getDetailById:function(store,payload){
			console.log(payload,5555);
			axios.get(payload).then(res=>{
				//console.log(res.data,2)
				store.commit('getDetailById',res.data)
			})
			
		}
	},
	mutations:{
		changeHeadTitle:function(state,payload){
			state.headTitle=payload
		},
		getDetailById:function(state,payload){
			console.log(payload);
			state.detailData=payload;
		}

	},
	getters:{
		buyinfo_list:function(state){
			return state.detailData?state.detailData.buyinfo_list:[]
		},
		store:function(state){
			return state.detailData?state.detailData.store:[]
		},
		table_list:function(state){
			return state.detailData?state.detailData.table_list:[]
		},
		youhui_info:function(state){
			return state.detailData?state.detailData.youhui_info:[]
		},
		youhui_other:function(state){
			return state.detailData?state.detailData.youhui_other:[]
		}

	}
})


export default store