import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
import Login from '@/components/login'
import Register from '@/components/register'
import accountLogin from '@/components/accountLogin'
import phoneLogin from '@/components/phoneLogin'
import Detail from '@/components/detail'
import Location from '@/components/location'

Vue.use(Router);

export default new Router({
  routes: [
  	{
  		path:'/home',
  		component:Home
  	},
    {
      path:'/list',
      component:List
    },
    {
      path:'/login',
      component:Login,
      children:[
          {
            path:'accountLogin',
            component:accountLogin
          },
          {
            path:'phoneLogin',
            component:phoneLogin
          },
          {
            path:'/',
            redirect:"/login/accountLogin"
          }
      ]
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/detail/:qiaoid',     //动态路由匹配
      component:Detail
    },
    {
      path:'/location',     //动态路由匹配
      component:Location
    },
  	{
  		path:"*",  //任何路径都会匹配到/home 组件中
  		redirect:"/home"
  	}


   
  ]
})
