<script setup>
import { useRouter } from 'vue-router'
import menus from '@/extends/settings/menus'

const router = useRouter()

const onClicked = (path) => {
	router.push(path === 'dashboard' ? '/' : `/${path}`)
}
</script>

<template>
	<div class="drawer drawer-start">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content"></div>
		<div class="drawer-side">
			<label for="my-drawer" class="drawer-overlay"></label>
			<slot />
		</div>
	</div>
</template>
