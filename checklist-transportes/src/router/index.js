import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import PipasView from '../views/PipasView.vue'
import ViajesView from '../views/ViajesView.vue'
import OperadoresView from '../views/OperadoresView.vue'
import AsignarViajes from '../views/AsignarViajeView.vue'
import Historial from '../views/HistoricoViajesView.vue'
import Laboratorios from '../views/LaboratoriosView.vue'
import OperadorHome from '../views/operador/OperadorHome.vue'
import ViajeDetalle from '../views/operador/ViajeDetalle.vue'
import IniciarViaje from '../views/operador/IniciarViaje.vue'
import ViajeEnCurso from '../views/operador/ViajeEnCurso.vue'

const routes = [
  { path: '/', component: LoginView },

  // ADMIN
  { path: '/dashboard', component: DashboardView },
  { path: '/pipas', component: PipasView },
  { path: '/viajes', component: ViajesView },
  { path: '/operadores', component: OperadoresView },
  { path: '/asignarviaje', component: AsignarViajes },
  { path: '/Historial', component: Historial },
  { path: '/laboratorios', component: Laboratorios },

  // OPERADOR 👇
  { path: '/operador', component: OperadorHome },
  { path: '/operador/viaje/:id', component: ViajeDetalle },
  { path: '/operador/iniciar/:id', component: IniciarViaje },
  { path: '/operador/en-curso/:id', component: ViajeEnCurso }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})