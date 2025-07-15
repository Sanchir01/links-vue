<script setup lang="ts">
import { computed } from "vue";
import { useColorMode } from "@vueuse/core";
import { IInput } from "../shared/ui/input";

const isDark = computed(() => useColorMode().value == "dark");
const sayHello = () => alert("asdsa");
</script>

<template>
  <div
    class="max-w-[1200px] m-auto mt-10 flex flex-col justify-center items-center"
  >
    <div class="flex gap-5 items-center">
      <IInput
        id="inputDemo"
        placeholder="Введите ссылку"
        container-class="w-full max-w-sm"
      ></IInput>
      <RippleButton @click="sayHello" class="w-50">Нажми меня</RippleButton>
    </div>
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
