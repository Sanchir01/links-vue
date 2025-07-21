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

    <ul v-auto-animate v-else-if="isSuccess && data?.length" class="space-y-2">
      <li v-for="item in data" :key="item.id" class="p-2 rounded">
        <div class="flex gap-2 items-center">
          <NuxtLink :to="item.url">
            {{ item.url }}
          </NuxtLink>
          <RemoveUrl :id="item.id" />
        </div>
      </li>
    </ul>

    <div v-else class="text-center text-gray-400">Ссылок пока нет</div>
  </div>
</template>
