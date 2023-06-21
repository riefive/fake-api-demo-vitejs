AbortSignal.timeout ??= function timeout(ms) {
	const abortControl = new AbortController()
	setTimeout(() => abortControl.abort(), ms)
	return abortControl.signal
}

const apiFetch = async (url, method, bodies = null, settings = null) => {
	const headers = new Headers()
	const options = { method: method.toUpperCase() }
	const type = settings?.type || 'text/plain'
	const timeout = settings?.timeout || 10
	const token = settings?.token || null
	const tokenType = settings?.tokenType || 'Bearer'
	const cacheType = settings?.cache || 'default' // default | no-cache
	if (token) {
		headers.append('Authorization', `${tokenType} ${token}`)
	}
	if (method === 'get') {
		url += bodies && Object.keys(bodies).length > 0 ? '?' + new URLSearchParams(params).toString() : ''
	} else if (['post', 'put', 'patch'].includes(method)) {
		if (/json/i.test(type)) {
			headers.append('Content-Type', 'application/json')
			options.body = JSON.stringify(bodies)
		}
		if (/object/i.test(type)) {
			const formData = new FormData()
			for (let key in bodies) formData.append(key, bodies[key])
			options.body = formData
		}
	}
	options.cache = cacheType
	options.headers = headers
	options.signal = AbortSignal.timeout(Number(timeout) * 1000)
}

export { apiFetch }
