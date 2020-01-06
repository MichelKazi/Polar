import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useCookies } from 'react-cookie';


const PublicRoute = ({ component: Component, ...rest }) => {
	const [cookies] = useCookies('_session')

	return (
		<Route {...rest} render={(props) => (
			!cookies._session 
				? <Component {...props} />
				: <Redirect to='/dashboard' />
		)} />
	)
}

export default PublicRoute
