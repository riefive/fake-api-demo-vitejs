import { createRouter, createWebHistory } from 'vue-router'

const baseUrl = '/'
const pages = import.meta.glob('./pages/*.vue')

const routes = Object.keys(pages).map((path) => {
	const routePath = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
	const routeName = routePath.replace(/\//g, '').trim()
	let routeNameParent = null
	let routeNameParams = null
	let isParams = false
	if (/\_/.test(routeName)) {
		const splits = routeName.split('_')
		routeNameParent = splits.length > 0 ? splits[0] : ''
		routeNameParams = splits.length > 1 ? splits[1] : ''
		isParams = true
	}
	return {
		name: isParams ? routeNameParent : routeName,
		path: isParams ? `/${routeNameParent}/:${routeNameParams}` : routeName === 'home' ? '/' : routePath,
		component: pages[path],
		meta: { layout: routeName === 'home' ? 'default' : 'small' }
	}
})

try {
	const alias = JSON.parse(import.meta.env.VITE_PATH_ALIAS || '')
	if (alias && typeof alias === 'object') {
		for (const key in alias) {
			const element = alias[key]
			const routeCurrent = routes.find((v) => v.name.trim() === element.trim()) || null
			if (routeCurrent) {
				const routeClone = Object.assign({}, routeCurrent)
				routeClone.name = key
				routeClone.path = String(routeClone.path || '').replace(element, key)
				routes.push(routeClone)
			}
		}
	}
	routes.push({ name: 'not-allowed', path: '/notallowed', component: () => import('@/components/templates/NotAllowed.vue') })
	routes.push({ name: 'not-found', path: '/:pathMatch(.*)*', component: () => import('@/components/templates/NotFound.vue') })
} catch (error) {}

const router = createRouter({
	history: createWebHistory(baseUrl),
	routes: routes
})

export default router
