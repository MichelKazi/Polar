import React, {useContext, useState, useEffect} from 'react';
import history from './history'
import Home from './components/Home';
import SignIn from './components/SignIn'
import getRes from './getRes.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './Store'


function App() {
	
	useEffect( () => {
		
	}, [])
					
  return (
		<BrowserRouter history = {history}>
			<Switch>
				<Route path="/login" exact component={SignIn} />
				<Route path="/" exact component={Home} />
				
			</Switch>
		</BrowserRouter>
  );  
}

export default App;

