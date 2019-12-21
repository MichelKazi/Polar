
const getRes = async _ =>{
	const res = await fetch('/api/hello')
	const body = await res.json()
	response.status !== 200 && throw Error(body.message)

	return body
}

const [renderedRes, setRenderedRes] = useState(null)

useEffect( () => {
	getRes()
		.then(res => {
			setRenderedRes(res)
		})
})

