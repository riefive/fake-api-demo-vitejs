const subMenuOfNuxt = [
	{ id: 'beer', text: 'List of Beers', type: 'text', icon: 'mdil-grid' },
	{ id: 'mountain', text: 'List of Mountains', type: 'text', icon: 'mdil-grid' }
]

const menus = [
	{ id: 'dashboard', text: 'Dashboard', type: 'text', icon: 'mdil-view-dashboard' },
	{ id: 'nuxt', text: 'Nuxt', type: 'dropdown', icon: 'mdil-triangle', menus: subMenuOfNuxt }
]

export default menus
