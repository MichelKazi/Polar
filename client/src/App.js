import React, { useState, useEffect} from 'react';
import getRes from './getRes.js';
import AppHeader from './components/AppHeader.js'

function App() {
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes('/users/1')
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (
    <div className="App">
			<AppHeader userName={renderedRes['email']} />
		</div>
  );  
}

export default App;

