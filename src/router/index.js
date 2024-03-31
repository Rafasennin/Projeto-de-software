import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AgendaView from '../views/AgendaView.vue'
import ProfissionaisView from '../views/ProfissionaisView'
import CheckoutView from '../views/CheckoutView.vue'
import ComprovanteView from '@/views/ComprovanteView.vue'
import LoginView from '../views/SingIn.vue'
import EventBus from '@/components/EventBus'

const routes = [
 
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: AgendaView,
    beforeEnter: (to, from, next) => {
      // Verificar se o usuário está autenticado
      const isAuthenticated = EventBus.isAuthenticated; 
      if (!isAuthenticated) {
        next({ name: 'login' });
      } else {
        next();
      }
    }
  },
  {
    path: '/profissionais',
    name: 'profissionais',
    component: ProfissionaisView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/comprovante',
    name: 'comprovante',
    component: ComprovanteView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
