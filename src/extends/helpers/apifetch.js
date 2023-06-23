AbortSignal.timeout ??= function timeout(ms) {
	const abortControl = new AbortController()
	setTimeout(() => abortControl.abort(), ms)
	return abortControl.signal
}

const apiFetch = async (url, method, bodies = null, settings = null) => {
	if (typeof window === 'undefined' || !window?.fetch) {
		return { url, status: 0, statusText: 'Fetch is not support', isError: true }
	}
	const headers = new Headers()
	const options = { method: method.toUpperCase() }
	const type = settings?.type || 'text/plain'
	const timeout = settings?.timeout || 10
	const token = settings?.token || null
	const tokenType = settings?.tokenType || 'Bearer'
	const cacheType = settings?.cache || 'default' // default | no-cache
	const credentialType = settings?.credential || null // include, same-origin, omit
	const modeType = settings?.mode || null // same-origin, no-cors, cors
	if (token) headers.append('Authorization', `${tokenType} ${token}`)
	if (cacheType) options.cache = cacheType
	if (credentialType) options.credential = credentialType
	if (modeType) options.mode = modeType
	if (method === 'get') {
		url += bodies && Object.keys(bodies).length > 0 ? '?' + new URLSearchParams(params).toString() : ''
	} else if (['post', 'put', 'patch'].includes(method)) {
		if (/json/i.test(type)) {
			headers.append('Content-Type', 'application/json')
			options.body = JSON.stringify(bodies)
		}
		if (/file/i.test(type)) {
			const formData = new FormData()
			for (let key in bodies) formData.append(key, bodies[key])
			options.body = formData
		}
		if (/file-multi/i.test(type)) {
			const formData = new FormData()
			for (let key in bodies) {
				if (key === 'files') continue
				formData.append(key, bodies[key])
			}
			if (bodies?.files) {
				for (const [i, file] of Array.from(bodies.files).entries()) {
					formData.append(`file_${i}`, file)
				}
			}
			options.body = formData
		}
	}
	options.headers = headers
	options.signal = AbortSignal.timeout(Number(timeout) * 1000)

	let results = null
	try {
		let data = null
		const response = await fetch(url, options)
		const contentType = response.headers.get('content-type')
		const details = { url: response.url, status: response.status, statusText: response.statusText, type: contentType }
		if (contentType.includes('application/json')) {
			data = await response.json()
		} else if (/image|msword|ms-excel|openxml|csv|pdf/i.test(contentType)) {
			const blob = await response.blob()
			const blobToUrl = URL.createObjectURL(blob)
			data = { blob, url: blobToUrl }
		} else {
			data = await response.text()
		}
		if (response.ok) {
			details.redirected = response.redirected
		} else {
			details.isError = true
		}
		Object.assign(details, { data })
		results = details
	} catch (error) {
		results = { url, status: 0, statusText: error?.message || error.toString(), isError: true }
	}
	return results
}

const apiRequest = (url) => {
	return new Promise((resolve) => {
		const results = { url, status: 0, statusText: null }
		const request = new XMLHttpRequest()
		request.open('GET', url, true)
		request.setRequestHeader('Access-Control-Allow-Origin', '*')
		request.onreadystatechange = () => {
			if (request.readyState !== 4) {
				results.statusText = 'not ready'
				return resolve(results)
			}
			if (request.status === 200) {
				results.status = 200
				results.statusText = 'ok'
			} else {
				results.status = request.status
				results.statusText = 'Image not found'
			}
			resolve(results)
		}
		request.send()
	})
}

const checkRequestImage = (url) => {
	return new Promise((resolve) => {
		const requestImage = document.createElement('img')
		requestImage.src = url
		requestImage.onerror = (...args) => {
			console.log(url, 'other type of error', args)
			resolve({ url, status: 0, statusText: 'error load a image', isError: true })
		}
		requestImage.onload = () => {
			resolve({ url, status: 200, statusText: 'image has loaded' })
		}
	})
}

export { apiFetch, apiRequest, checkRequestImage }
