<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";

const isDark = computed(() => useColorMode().value == "dark");
</script>

<template>
  <div
    class="max-w-[1200px] m-auto mt-10 flex flex-col justify-center items-center"
  >
    <CreateUrl />
    <UrlList />
  </div>
  <ParticlesBg
    class="absolute inset-0 -z-10"
    :quantity="100"
    :ease="90"
    :color="isDark ? '#FFF' : '#000'"
    :staticity="10"
    refresh
  />
</template>
