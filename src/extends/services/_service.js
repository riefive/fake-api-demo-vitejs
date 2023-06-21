import { apiFetch } from '../helpers/apifetch'

const apiNuxt = import.meta.env.VITE_API_NUXT || 'http://localhost'
const apiFake = import.meta.env.VITE_API_FAKE || 'http://localhost'
const apiFakeGraphql = import.meta.env.VITE_API_FAKE_GRAPHQL || 'http://localhost'
const apiTimeout = import.meta.env.VITE_API_TIMEOUT || 10

const apiFetchNuxt = async (path, method, bodies = null) => {
	return await apiFetch(`${apiNuxt}/${path}`, method, bodies, { timeout: apiTimeout })
}

export { apiFetchNuxt }
