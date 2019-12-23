import React, { useState, useEffect} from 'react';
import getRes from './getRes.js';
function App() {
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes('/users/7')
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

