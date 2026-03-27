<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-2">

    <!-- Lado izquierdo (branding) -->
    <div class="hidden lg:flex flex-col justify-center items-center bg-gray-900 text-white p-10">
      <h1 class="text-4xl font-bold mb-4">Checklist Transporte</h1>
      <p class="text-gray-300 text-center max-w-md">
        Plataforma de control y monitoreo de pipas, checklists operativos y seguimiento en tiempo real.
      </p>
    </div>

    <!-- Lado derecho (formulario) -->
    <div class="flex items-center justify-center bg-gray-100 p-6">
      <RouterView />
    </div>

  </div>
</template>