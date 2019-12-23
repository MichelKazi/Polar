import React, { useState, useEffect} from 'react';

function App() {
	const getRes = async (endpoint) =>{
		const res = await fetch(endpoint)
		const body = await res.json()
		return body
	}

	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes('/users')
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (
    <div className="App">
			<h2>Call out to API</h2>
			<p>{ renderedRes["email"] }</p>
		</div>
  );  
}

export default App;

