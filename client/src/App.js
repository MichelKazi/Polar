import React, { useState, useEffect} from 'react';
import getRes from './getRes.js';
import AppHeader from './components/AppHeader.js';
import SignIn from './components/SignIn';

const context = React.createContext();


function App() {
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes('/user/1')
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (
    <div className="App">
			<AppHeader userName={renderedRes['fullName']} />
			<SignIn />
		</div>
  );  
}

export default App;

