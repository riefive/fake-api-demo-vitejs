<script setup>
import Navbar from '@/components/templates/Navbar.vue'
</script>

<template>
	<div class="relative flex flex-row min-h-screen">
		<aside class="bg-neutral w-[10%]"></aside>
		<div class="flex flex-col flex-grow">
			<header><navbar /></header>
			<main class="flex-auto flex-grow"><slot /></main>
			<footer></footer>
		</div>
	</div>
</template>
