<template>
  <div class="min-h-screen flex">

    <!-- Lado izquierdo -->
    <div class="hidden lg:flex w-1/2 bg-gray-900 text-white items-center justify-center p-10">
      <div>
        <h1 class="text-4xl font-bold mb-4">
          Checklist Transporte
        </h1>
        <p class="text-gray-300 max-w-md">
          Plataforma de control, monitoreo y gestión de pipas en tiempo real.
        </p>
      </div>
    </div>

    <!-- Lado derecho -->
    <div class="flex flex-1 items-center justify-center bg-gray-100">

      <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        <!-- Header -->
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold text-gray-900">
            Iniciar sesión
          </h2>
          <p class="text-gray-500 text-sm">
            Accede a tu cuenta
          </p>
        </div>

        <!-- Form -->
        <div class="space-y-4">

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Correo
            </label>
            <input
              type="email"
              v-model="email"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="admin@test.com"
            />
          </div>

          <div>
            <label class="block text-sm text-gray-600 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              v-model="password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="••••••"
            />
          </div>

         <button type="button" @click="handleLogin"
            class="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            Iniciar sesión
          </button>

          <p v-if="error" class="text-red-500 text-sm text-center">
            Credenciales incorrectas
          </p>

        </div>

        <!-- Footer -->
        <div class="mt-6 text-center text-xs text-gray-400">
          © 2026 Sistema Transporte
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref(false)

const auth = useAuthStore()

const handleLogin = () => {
  error.value = false

  const success = auth.login(email.value, password.value)
  
  if (success) {
    if (auth.user.role === 'admin') {
      router.push('/dashboard')
    } else if (auth.user.role === 'operador') {
      router.push('/operador') // 👈 nueva entrada
    }
  } else {
    error.value = true
  }
}
</script>