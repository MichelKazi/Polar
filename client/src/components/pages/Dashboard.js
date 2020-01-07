import React, {useContext} from 'react';
import { Button } from '@material-ui/core'
import { store } from '../Store.js'
import { useCookies } from 'react-cookie';
import history from '../history';
const axios = require('axios')
const jwt = require('jsonwebtoken')

const Dashboard = props => {
	const user = useContext(store);
	const { dispatch } = user;
	const [cookies, setCookies, removeCookie] = useCookies('_session')

	const handleLogOut = async (e) => {
		e.preventDefault()
		removeCookie('_session')

		await axios
			.get('/api/v1/account/logout', {
				email: user.state.email,
				password: user.state.password
			})
			.then(()=>{ 
				history.push('/login');
				window.location.reload();
			})
			.catch(err => {console.log(err)})

		dispatch({type: 'setUser', payload: null})
		console.log(user)
		
	} 

	return (
		<div>
			<Button onClick = {handleLogOut}>
				LOG OUT
			</Button>
		</div>
	);
};

export default Dashboard;
