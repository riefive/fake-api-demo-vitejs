AbortSignal.timeout ??= function timeout(ms) {
	const abortControl = new AbortController()
	setTimeout(() => abortControl.abort(), ms)
	return abortControl.signal
}

const apiFetch = async () => {
	/*
  const options = { cache: 'no-cache', method: method.toUpperCase(), headers: { 'Content-Type': 'application/json' } }
	if (method === 'get' && params) {
		urlTargetServer += '?' + new URLSearchParams(params).toString()
	} else {
		options.body = JSON.stringify(body)
	}
	options.signal = AbortSignal.timeout(Number(apiTimeMs) * 1000)
  */
}

export { apiFetch }
