import React from 'react'
import ProtectedRoute from './routes/ProtectedRoute.js'
import history from './history'
import Home from './components/Home'
import LogIn from './components/LogIn.js'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard.js'

function App() {

  return (
		<BrowserRouter history = {history}>
			<Switch>
				<Route path="/test" exact component = {LogIn} />
				<Route path="/" exact component = {Home} />
				<Route path="/signup" exact component={SignUp} />
				<Route path="/login" exact component={SignIn} />
				<ProtectedRoute path="/profile" component={Profile} />
				<ProtectedRoute path="/dashboard" component={Dashboard} />	
			</Switch>
		</BrowserRouter>
  )  
}

export default App

