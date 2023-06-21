<script setup>
import Menubar from '@/components/templates/Menubar.vue'
import Navbar from '@/components/templates/Navbar.vue'
</script>

<template>
	<div class="relative flex flex-row min-h-screen">
		<aside class="bg-gray-600 w-[15%] text-white small:hidden">
			<menubar />
		</aside>
		<div class="flex flex-col flex-grow">
			<header><navbar /></header>
			<main class="flex-auto flex-grow"><slot /></main>
			<footer></footer>
		</div>
	</div>
</template>
