<script lang="js" setup>
import { ref } from 'vue'
import { IInput } from '../shared/ui/input'
import { useCreateUrl } from '../shared/hooks/createUrl'
import { RippleButton } from '../shared/ui/ripple-button'
const toast = useToast()
const inputValue = ref('')
const { mutateAsync } = useCreateUrl()

const handleSend = async () => {
	try {
		await mutateAsync(inputValue.value)
		inputValue.value = ''
	} catch (e) {
		toast.error({ title: 'Error!', message: 'Ошибки при создании' })
	}
}
</script>
<template>
	<div class="flex gap-5 items-center px-2">
		<IInput
			id="inputDemo"
			placeholder="Введите ссылку"
			container-class="w-full max-w-sm"
			v-model="inputValue"
		/>
		<RippleButton @click="handleSend" class="w-50">Нажми меня</RippleButton>
	</div>
</template>
