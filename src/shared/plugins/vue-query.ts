import type {
	DehydratedState,
	VueQueryPluginOptions
} from '@tanstack/vue-query'
import {
	VueQueryPlugin,
	QueryClient,
	hydrate,
	dehydrate
} from '@tanstack/vue-query'

import { defineNuxtPlugin, useState } from '#imports'
export const queryClient = new QueryClient({
	defaultOptions: { queries: { staleTime: 5000, refetchOnWindowFocus: false } }
})
export default defineNuxtPlugin(nuxt => {
	const vueQueryState = useState<DehydratedState | null>('vue-query')

	const options: VueQueryPluginOptions = {
		queryClient,
		enableDevtoolsV6Plugin: true
	}

	nuxt.vueApp.use(VueQueryPlugin, options)

	if (import.meta.server) {
		nuxt.hooks.hook('app:rendered', () => {
			vueQueryState.value = dehydrate(queryClient)
		})
	}

	if (import.meta.client) {
		nuxt.hooks.hook('app:created', () => {
			hydrate(queryClient, vueQueryState.value)
		})
	}
})
