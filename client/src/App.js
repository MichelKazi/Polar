import React, {useContext, useState, useEffect} from 'react';
import getRes from './getRes.js';
import AppHeader from './components/AppHeader.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { store } from './Store'


function App() {
	const userState = useContext(store)
	const [renderedRes, setRenderedRes] = useState({}) // put an empty object since res sends a json
	
	useEffect( () => {
		getRes(`user/${userState.state.id}`)
			.then(res => {
				setRenderedRes(res)
			})
	}, [userState.state.id])
					
  return (

			<div className="App">
				<AppHeader />
				<SignIn />

			</div>
  );  
}

export default App;

