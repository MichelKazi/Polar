const axios = require('axios')
const getRes = async (endpoint) => {
	return await axios.get(endpoint)
		.then((res)=> {return res.data})
}

export default getRes;
