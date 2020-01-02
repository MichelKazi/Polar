import React, { useState, useEffect} from 'react';
import getRes from './getRes.js';
import AppHeader from './components/AppHeader.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import UserContext from './UserContext';


function App() {
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		console.log(process.env.REACT_APP_Bucket)
		getRes('/user/1')
			.then(res => {
				setRenderedRes(res)
			})
	}, [])
					
  return (

		<UserContext.Provider value={69}>
			<div className="App">
				<AppHeader userName={renderedRes['fullName']} />
				<SignIn />

			</div>
		</UserContext.Provider>
  );  
}

export default App;

