<script setup lang="ts">
import { RippleButton } from '@/src/shared/ui/ripple-button'

function loginWithGoogle() {
	window.location.href = 'http://localhost:4200/api/auth/google/url'
}
</script>

<template>
	<RippleButton @click="loginWithGoogle">Google</RippleButton>
</template>
