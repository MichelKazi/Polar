import React, {useContext, useState, useEffect} from 'react';
import ProtectedRoute from './routes/ProtectedRoute.js'
import history from './history'
import Home from './components/Home';
import SignIn from './components/SignIn'
import SingUp from './components/SignUp'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard.js'

function App() {
	
	useEffect( () => {
	}, [])
					
  return (
		<BrowserRouter history = {history}>
			<Switch>
				<Route path="/" exact component = {Home} />
				<Route path="/login" exact component={SignIn} />
				<ProtectedRoute path="/dashboard" component={Dashboard} />	
			</Switch>
		</BrowserRouter>
  );  
}

export default App;

