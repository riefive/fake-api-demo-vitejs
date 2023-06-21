import { apiFetchNuxt } from './_service'

const requestNuxtBeer = async () => {
	return apiFetchNuxt('beers', 'get')
}

const requestNuxtMountain = async () => {
	return apiFetchNuxt('mountains', 'get')
}

const requestNuxtPlanet = async () => {
	return apiFetchNuxt('planets', 'get')
}

const requestNuxtPost = async () => {
	return apiFetchNuxt('posts', 'get')
}

const requestNuxtRiver = async () => {
	return apiFetchNuxt('rivers', 'get')
}

export { requestNuxtBeer, requestNuxtMountain, requestNuxtPlanet, requestNuxtPost, requestNuxtRiver }
