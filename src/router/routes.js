
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
  })
}

export default routes
