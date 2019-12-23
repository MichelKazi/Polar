const getRes = async (endpoint) =>{
	const res = await fetch(endpoint)
	const body = await res.json()
	return body
}

export default getRes;
