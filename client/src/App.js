import React, {useContext, useState, useEffect} from 'react';
import history from './history'
import Home from './components/Home';
import SignIn from './components/SignIn'
import getRes from './getRes.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './Store'
import Dashboard from './components/Dashboard.js'

function App() {
	
	useEffect( () => {
	}, [])
					
  return (
		<BrowserRouter history = {history}>
			<Switch>
				<Route path="/login" exact component={SignIn} />
				<Route path="/" exact component={Home} />
				<Route path="/dashboard" exact component={Dashboard} />
				
			</Switch>
		</BrowserRouter>
  );  
}

export default App;

