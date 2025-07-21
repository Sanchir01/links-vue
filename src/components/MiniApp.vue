<script lang="ts" setup>
import { MainButton, useWebApp, useWebAppPopup } from "vue-tg";

const { showAlert } = useWebAppPopup();
const { initDataUnsafe } = useWebApp();
</script>

<template>
  <div>
    <h2>{{ initDataUnsafe.user?.id }}</h2>
    <MainButton
      text="Hello main button"
      color="rgba(0,191,111,1)"
      @click="() => showAlert('Hello!')"
    />
  </div>
</template>
