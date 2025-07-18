<script lang="js" setup>
import { ref } from 'vue'
import { IInput } from '../shared/ui/input'
import { useCreateUrl } from '../shared/hooks/createUrl'

const inputValue = ref('');
const mutation = useCreateUrl();

const handleSend = () => {
    mutation.mutate(inputValue.value);
};
</script>
<template>
  <div class="flex gap-5 items-center">
    <IInput
      id="inputDemo"
      placeholder="Введите ссылку"
      container-class="w-full max-w-sm"
      v-model="inputValue"
    />
    <RippleButton @click="handleSend" class="w-50">Нажми меня</RippleButton>
  </div>
</template>
