AbortSignal.timeout ??= function timeout(ms) {
	const abortControl = new AbortController()
	setTimeout(() => abortControl.abort(), ms)
	return abortControl.signal
}

const apiFetch = async () => {}

export { apiFetch }
