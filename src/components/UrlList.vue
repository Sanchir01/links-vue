<script lang="ts" setup>
import { useGetAllUrl } from "../shared/hooks/getAllUrl";

const { data, isLoading, isSuccess, isError, error } = useGetAllUrl();
</script>

<template>
  <div class="p-4">
    <div v-if="isLoading" class="text-center text-gray-500">Загрузка...</div>
    <div v-if="isError" class="text-red-500 text-center">
      Произошла ошибка: {{ error?.message || "Неизвестная ошибка" }}
    </div>

    <ul v-else-if="isSuccess && data?.length" class="space-y-2">
      <li v-for="item in data" :key="item.id" class="p-2 rounded">
        <NuxtLink :to="item.url">
          {{ item.url }}
        </NuxtLink>
      </li>
    </ul>

    <div v-else class="text-center text-gray-400">Ссылок пока нет</div>
  </div>
</template>
