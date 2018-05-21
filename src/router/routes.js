export default [
  {path: '/', name: 'login', component: () => import('components/Login')},
  {path: '/home', name: 'home', component: () => import('components/Home')},
  {path: '/pedidos', component: () => import('components/Pedidos')},
  {path: '/produtos', component: () => import('components/Produtos')},

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
