const transformToClient = (item) => {
	return {
		index: 0,
		title: item.title,
		slug: item.slug,
		description: item.description?.length > 35 ? String(item.description || '').substring(0, 32) + '...' : item.description,
		length: item.length,
		continent: item.continent,
		countries: (item.countries || [])?.join(','),
		image: item.image,
		dir: item.dir,
		path: item.path,
		updatedAt: String(item.updatedAt || '').substring(0, 10)
	}
}

export { transformToClient }
