const getQueryParams = (key = null) => {
	if (typeof window === 'undefined') return
	const queryString = window.location.search || ''
	const urlParams = new URLSearchParams(queryString)
	if (!key) return Object.fromEntries(urlParams)
	return urlParams.has(key) ? urlParams.get(key) : ''
}

export { getQueryParams }
