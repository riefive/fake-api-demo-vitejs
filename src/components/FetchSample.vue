<script setup>
import { onMounted } from 'vue'
import { apiFetch } from '@/extends/helpers/apifetch'

onMounted(async () => {
	let test = await apiFetch('https://api.nuxtjs.dev/beers', 'get')
	console.log(test)
	test = await apiFetch('https://api.nuxtjs.dev/beers-dev', 'get')
	console.log(test)
	test = await apiFetch('https2://api.nuxtjs.dev/beers-dev', 'get')
	console.log(test)
	test = await apiFetch('https://localhost', 'get')
	console.log(test)
})
</script>

<template>
	<div />
</template>
