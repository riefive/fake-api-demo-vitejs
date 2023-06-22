const transformToClient = (item) => {
	return {
		index: 0,
		product_id: item.product_id,
		beer_id: item.beer_id,
		name: item.name,
		slug: item.slug,
		category: item.category,
		size: item.size,
		abv: item.abv,
		price: item.price,
		country: item.country,
		image_url: item.image_url,
		on_sale: item.on_sale,
		attributes: item.attributes,
		style: item.style,
		type: item.type,
		brewer: item.brewer,
		dir: item.dir,
		path: item.path,
		updatedAt: String(item.updatedAt || '').substring(0, 10)
	}
}

export { transformToClient }
