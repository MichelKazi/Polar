import React, { useState, useEffect} from 'react';

function App() {
	const getRes = async () =>{
		const res = await fetch('/api/hello')
		const body = await res.json()
		if (res.status !== 200) throw Error(body.message)

		return body
	}

	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes()
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (
    <div className="App">
			<h2>Call out to API</h2>
			<p>{ renderedRes.express }</p>
		</div>
  );  
}

export default App;

