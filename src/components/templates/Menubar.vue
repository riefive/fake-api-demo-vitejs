<script setup>
import { useRouter } from 'vue-router'
import menus from '@/extends/settings/menus'

const router = useRouter()

const props = defineProps({
	isArrow: { type: Boolean, default: false }
})

const onClicked = (path, type) => {
	if (type !== 'text') return
	router.push(path === 'dashboard' ? '/' : `/${path}`)
}
</script>

<template>
	<div v-if="props.isArrow" class="flex justify-end h-[45px]">
		<label for="my-drawer" class="drawer-button"><span class="mdil mdil-arrow-right text-[32px] text-white"></span></label>
	</div>
	<ul class="menu menu-md bg-gray-600 mt-[50px] p-2">
		<li v-for="(menu, i) in menus" :key="i" @click="onClicked(menu.id, menu.type)">
			<span v-if="menu.type === 'text'" class="mdil" :class="menu.icon">
				<a>{{ menu.text }}</a>
			</span>
			<details v-else-if="menu.type === 'dropdown'" :open="false">
				<summary>
					<span class="mr-1 mdil" :class="menu.icon"></span>
					<a>{{ menu.text }}</a>
				</summary>
				<ul>
					<li v-for="(subMenu, j) in menu.menus" :key="j" @click="onClicked(menu.id + '-' + subMenu.id, subMenu.type)">
						<span class="mdil" :class="subMenu.icon">
							<a>{{ subMenu.text }}</a>
						</span>
					</li>
				</ul>
			</details>
		</li>
		<li></li>
	</ul>
</template>
