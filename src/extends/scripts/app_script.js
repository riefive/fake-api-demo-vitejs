import { getQueryParams } from './_script'

import LayoutBlank from '@/components/layouts/LayoutBlank.vue'
import LayoutMain from '@/components/layouts/LayoutMain.vue'

const initializedApp = async (type) => {
	const queries = getQueryParams()
	if (queries?.layout) type = queries.layout || 'default'
	let layoutView = null
	if (type === 'blank') {
		layoutView = LayoutBlank
	} else {
		layoutView = LayoutMain
	}
	await new Promise((resolve) => setTimeout(resolve, 15))
	return { type, layoutView }
}

export { initializedApp }
