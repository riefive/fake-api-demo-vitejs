<script setup>
import { computed } from 'vue'

const props = defineProps({
	columns: { type: Array, default: () => [] },
	items: { type: Array, default: () => [] },
	loading: { type: Boolean, default: false }
})

const columnFilters = computed(() => {
	return props.columns.filter((v) => !v.hidden)
})
</script>

<template>
	<div v-if="props.loading" class="flex justify-center p-2">
		<progress class="progress w-56"></progress>
	</div>
	<table v-else class="block">
		<thead class="sticky top-0 border-t border-b bg-white">
			<tr>
				<th v-for="(col, i) in columnFilters" :key="i" :class="col.large ? 'small:hidden' : ''">
					{{ col.text }}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(item, a) in props.items" :key="a" class="border-b">
				<td v-for="(subItem, b) in columnFilters" :key="b" class="p-2" :class="subItem.large ? 'small:hidden' : ''">{{ item[subItem.id] }}</td>
			</tr>
		</tbody>
	</table>
</template>
