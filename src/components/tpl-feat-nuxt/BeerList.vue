<script setup>
import { onMounted, ref } from 'vue'
import { columns } from '@/extends/models/nuxt_beer_model'
import { transformToClient } from '@/extends/scripts/nuxt_beer_script'
import { requestNuxtBeer } from '@/extends/services/nuxt_service'
import TableShow from '@/components/commons/TableShow.vue'

const items = ref([])

onMounted(async () => {
	const response = await requestNuxtBeer()
	if (response?.data) {
		items.value = response?.data?.map((item, i) => {
			const itemNewer = transformToClient(item)
			itemNewer.index = i + 1
			return itemNewer
		})
	}
})
</script>

<template>
	<div>
		<table-show :columns="columns" :items="items" />
	</div>
</template>
