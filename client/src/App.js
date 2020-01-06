import React from 'react'
import { PublicRoute,	ProtectedRoute } from './routes'
import history from './components/history'
import {Dashboard, Home, SignIn, SignUp, Profile}  from './components/pages'
import { BrowserRouter, Switch } from 'react-router-dom'

function App() {

  return (
			<BrowserRouter history = {history}>
				<Switch>
						<PublicRoute path="/" exact component = {Home} />
						<PublicRoute path="/signup" component={SignUp} />
						<PublicRoute path="/login" component={SignIn} />
						<ProtectedRoute path="/profile" component={Profile} />
						<ProtectedRoute path="/dashboard" component={Dashboard} />	
				</Switch>
			</BrowserRouter>
  )  
}

export default App

