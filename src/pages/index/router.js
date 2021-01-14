//路由懒加载
const Index=()=>import('./index')

export default {
  path:'/',
  name:'index',
  component:Index,
  children:[]
}
