const debounce = (routine, wait, immediate) => {
	let timeout = null
	return function () {
		const context = this
		const args = arguments
		clearTimeout(timeout)
		timeout = setTimeout(function () {
			timeout = null
			if (!immediate) routine.apply(context, args)
		}, wait)
		if (immediate && !timeout) routine.apply(context, args)
	}
}

const sleep = async (ms = 15) => {
	return await new Promise((resolve) => setTimeout(resolve, ms))
}

export { debounce, sleep }
