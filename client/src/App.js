import React, { useState, useEffect} from 'react';
import getRes from './getRes.js';
import AppHeader from './components/AppHeader.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
const context = React.createContext();


function App() {
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		console.log(process.env.REACT_APP_NOT_SECRET_CODE)
		getRes('/user/1')
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (
    <div className="App">
			<AppHeader userName={renderedRes['fullName']} />
			<SignUp />

		</div>
  );  
}

export default App;

