import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main', exact: true},
    component: () => import('@/views/Home')
  },
  {
    path: '/vehicles/:id',
    name: 'Vehicle',
    component: () => import('@/views/VehicleDetail'),
    children: [
      {
        path: 'specifications',
        component: () => import('@/components/vehicleDetail/Specifications')
      },
      {
        path: 'team',
        component: () => import('@/components/vehicleDetail/Team')
      },
      {
        path: 'rent-terms',
        component: () => import('@/components/vehicleDetail/RentTerms')
      }
    ]
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
