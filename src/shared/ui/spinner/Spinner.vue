<template>
  <span class="spinner" aria-label="Загрузка" />
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 4px solid #e5e7eb;
  border-top: 4px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
