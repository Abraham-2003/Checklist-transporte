<template>
  <aside
    class="w-64 bg-gray-900 text-white flex flex-col min-h-screen"
  >
    <!-- Header / Logo -->
    <div class="px-6 py-5 border-b border-gray-800">
      <h1 class="text-xl font-bold tracking-wide">
        Traslado de pipas
      </h1>
    </div>

    <!-- Usuario -->
    <div class="px-6 py-4 border-b border-gray-800">
      <p class="text-sm font-semibold">Juan Pérez</p>
      <p class="text-xs text-gray-400">Administrador</p>
    </div>

    <!-- Navegación -->
    <nav class="flex-1 px-4 py-6 space-y-2">

      <RouterLink to="/dashboard" class="link">
        <span></span>
        Dashboard
      </RouterLink>

      <RouterLink to="/viajes" class="link">
        <span></span>
        Viajes
      </RouterLink>

      <RouterLink to="/pipas" class="link">
        <span></span>
        Pipas
      </RouterLink>

      <RouterLink to="/operadores" class="link">
        <span></span>
        Operadores
      </RouterLink>

      <RouterLink to="/historial" class="link">
        <span></span>
        Historial
      </RouterLink>

      <RouterLink to="/laboratorios" class="link">
        <span></span>
        Laboratorios
      </RouterLink>

    </nav>

    <!-- Footer -->
    <div class="px-4 py-4 border-t border-gray-800">
      <button class="logout">
        ⏻ Cerrar sesión
      </button>
    </div>

  </aside>
</template>

<style scoped>
.link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 10px;
  transition: all 0.2s;
}

.link:hover {
  background-color: #1f2937;
}

.router-link-active {
  background-color: #2563eb;
}

.logout {
  width: 100%;
  text-align: left;
  padding: 10px 14px;
  border-radius: 10px;
  transition: all 0.2s;
}

.logout:hover {
  background-color: #7f1d1d;
}
</style>