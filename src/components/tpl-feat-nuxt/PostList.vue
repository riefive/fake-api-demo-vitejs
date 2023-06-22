<script setup>
import { onMounted, ref } from 'vue'
import { columns } from '@/extends/models/nuxt_post_model'
import { transformToClient } from '@/extends/scripts/nuxt_post_script'
import { requestNuxtPost } from '@/extends/services/nuxt_service'
import { sleep } from '@/extends/helpers/utils'
import TableShow from '@/components/commons/TableShow.vue'

const loading = ref(true)
const items = ref([])

onMounted(async () => {
	loading.value = true
	const response = await requestNuxtPost()
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
