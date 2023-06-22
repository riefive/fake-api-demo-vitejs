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

routes.push({ name: 'not-allowed', path: '/notallowed', component: () => import('@/components/templates/NotAllowed.vue') })
routes.push({ name: 'not-found', path: '/:pathMatch(.*)*', component: () => import('@/components/templates/NotFound.vue') })

const router = createRouter({
	history: createWebHistory(baseUrl),
	routes: routes
})

export default router
