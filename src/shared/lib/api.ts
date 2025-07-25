import { useRuntimeConfig } from '#app'
export const getBaseUrl = () => {
	const config = useRuntimeConfig()
	return import.meta.env.DEV
		? 'http://localhost:4200/api'
		: config.public.PROD_URL
}
