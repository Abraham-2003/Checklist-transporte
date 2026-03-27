import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    login(email, password) {

      // ADMIN
      if (email === 'admin@test.com' && password === '123456') {
        this.user = { name: 'Admin', role: 'admin' }
        return true
      }

      // OPERADOR (mock)
      if (email === 'operador@test.com' && password === '123456') {
        this.user = { name: 'Operador 1', role: 'operador' }
        return true
      }

      return false
    }
  }
})