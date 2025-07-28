<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'
import { ParticlesBg } from '../ui/particles-bg'

const isDark = computed(() => useColorMode().value == 'dark')
</script>

<template>
	<main>
		<slot />
		<ParticlesBg
			class="absolute inset-0 -z-100"
			:quantity="100"
			:ease="90"
			:color="isDark ? '#FFF' : '#000'"
			:staticity="10"
			refresh
		/>
	</main>
</template>
