<script setup lang="ts">
import { Toaster } from "../ui/sonner";
</script>

<template>
  <Toaster />
  <ClientOnly> 
    <slot />
  </ClientOnly>
</template>
