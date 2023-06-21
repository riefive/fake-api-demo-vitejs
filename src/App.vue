<script setup>
import { onMounted, ref, shallowRef } from 'vue'
import { RouterView } from 'vue-router'
import { initializedApp } from '@/extends/scripts/app_script'
import LayoutBlank from '@/components/layouts/LayoutBlank.vue'

const loading = ref(true)
const typeLayout = ref('main')
const LayoutView = shallowRef(LayoutBlank)

const initialized = async () => {
	loading.value = true
	const { layoutView: layout } = await initializedApp(typeLayout.value)
	if (layout) LayoutView.value = layout
	loading.value = false
}

onMounted(async () => {
	await initialized()
	if (typeof window === 'undefined') return
	window.addEventListener('popstate', async () => {
		await initialized()
	})
})
</script>

<template>
	<layout-view v-show="!loading">
		<router-view />
	</layout-view>
</template>
