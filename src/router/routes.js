export default [
  {path: '/', name: 'login', component: () => import('components/Login')},
  {path: '/home', component: () => import('components/Home')},
  {path: '/clientes', component: () => import('components/Clientes')},
  {path: '/produtos', component: () => import('components/Produtos')},
  {path: '/pedidos', component: () => import('components/Pedidos')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
