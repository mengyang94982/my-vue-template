//路由懒加载
const Login=()=>import('./login')

export default {
  path:'/Login',
  name:'login',
  component:Login,
  children:[]
}
