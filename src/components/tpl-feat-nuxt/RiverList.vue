<script setup>
import { onMounted, ref } from 'vue'
import { columns } from '@/extends/models/nuxt_river_model'
import { transformToClient } from '@/extends/scripts/nuxt_river_script'
import { requestNuxtRiver } from '@/extends/services/nuxt_service'
import { sleep } from '@/extends/helpers/utils'
import TableShow from '@/components/commons/TableShow.vue'

const loading = ref(true)
const items = ref([])

onMounted(async () => {
	loading.value = true
	const response = await requestNuxtRiver()
	if (response?.data) {
		items.value = response?.data?.map((item, i) => {
			const itemNewer = transformToClient(item)
			itemNewer.index = i + 1
			return itemNewer
		})
	}
	await sleep(100)
	loading.value = false
})
</script>

<template>
	<div>
		<table-show :columns="columns" :items="items" :loading="loading" />
	</div>
</template>
