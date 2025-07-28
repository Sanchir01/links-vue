<script lang="ts" setup>
import { useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(async () => {
	const code = route.query.code
	const error = route.query.error

	if (code) {
		try {
			const data = await useFetch(
				'http://localhost:4200/api/auth/google/callback',
				{
					method: 'POST',
					body: { code }
				}
			)
			console.log('data google', data)
		} catch (e) {
			console.error('Auth error:', e)
		}
	} else if (error) {
		console.log('Auth error:', error)
	}
})
</script>

<template>
	<NuxtLink href="/">go home</NuxtLink>
</template>
