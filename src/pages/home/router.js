//路由懒加载
const Home=()=>import('./home')

export default {
  path:'/Home',
  name:'home',
  component:Home,
  children:[]
}
