import React from 'react'
import { PublicRoute,	ProtectedRoute } from './routes'
import history from './components/history'
import { UserProfile, Dashboard, Home, SignIn, SignUp, Profile }  from './components/pages'
import TestSignIn from './components/pages/TestSignIn.js'
import { BrowserRouter, Switch } from 'react-router-dom'

function App() {

  return (
			<BrowserRouter history = {history}>
				<Switch>
						<PublicRoute path="/" exact component = {Home} />
						<PublicRoute path="/signup" component={SignUp} />
						<PublicRoute path="/login" component={SignIn} />
						<PublicRoute path="/testsignup" component={SignUp} />
						<PublicRoute path="/testlogin" component={TestSignIn} />
						<ProtectedRoute path="/profile" component={Profile} />
						<ProtectedRoute path="/dashboard" component={Dashboard} />	
						<ProtectedRoute path="/user/:userid">
							<UserProfile/>
						</ProtectedRoute>	
				</Switch>
			</BrowserRouter>
  )  
}

export default App

