<script setup>
import Drawer from '@/components/templates/Drawer.vue'
import Menubar from '@/components/templates/Menubar.vue'
import Navbar from '@/components/templates/Navbar.vue'
</script>

<template>
	<div class="relative flex flex-row min-h-screen">
		<aside class="bg-gray-600 text-white w-[225px] small:hidden">
			<menubar />
		</aside>
		<div class="flex flex-col flex-grow">
			<header><navbar /></header>
			<main class="flex-auto flex-grow p-2">
				<drawer>
					<div class="bg-gray-600 text-white w-[225px] h-full small:w-full">
						<menubar />
					</div>
				</drawer>
				<slot />
			</main>
			<footer></footer>
		</div>
	</div>
</template>
