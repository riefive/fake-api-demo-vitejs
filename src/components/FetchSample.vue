<script setup>
import { onMounted } from 'vue'
import { apiFetch, checkRequestImage } from '@/extends/helpers/apifetch'
import { imageOfInstagram as images } from '@/extends/settings/images'

onMounted(async () => {
	let test = null
	test = await apiFetch('https://api.nuxtjs.dev/beers', 'get')
	console.log(test)
	test = await apiFetch('https://api.nuxtjs.dev/beers-dev', 'get')
	console.log(test)
	test = await apiFetch('https2://api.nuxtjs.dev/beers-dev', 'get')
	console.log(test)
	test = await apiFetch('https://localhost', 'get')
	console.log(test)
	images?.forEach(async (item) => {
		const isFetch = false
		test = isFetch ? await apiFetch(item, 'get', null, { mode: 'no-cors' }) : await checkRequestImage(item)
		console.log(test)
	})
})
</script>

<template>
	<div />
</template>
