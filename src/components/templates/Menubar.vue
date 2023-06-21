<script setup>
import menus from '@/extends/settings/menus'
</script>

<template>
	<ul class="menu menu-md bg-gray-600 mt-[50px] p-2">
		<li v-for="(menu, i) in menus" :key="i">
			<span v-if="menu.type === 'text'" class="mdil" :class="menu.icon">
				<a>{{ menu.text }}</a>
			</span>
			<details v-else-if="menu.type === 'dropdown'" :open="false">
				<summary>
					<span class="mr-1 mdil" :class="menu.icon"></span>
					<a>{{ menu.text }}</a>
				</summary>
				<ul>
					<li v-for="(subMenu, j) in menu.menus" :key="j">
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
