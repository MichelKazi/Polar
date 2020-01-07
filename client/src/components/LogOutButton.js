import React, {useContext} from 'react';
import { Button, makeStyles } from '@material-ui/core'
import { store } from './Store.js'
import { useCookies } from 'react-cookie';
import history from './history';
const axios = require('axios')

const useStyles = makeStyles({
});


const LogOutButton = props => {
	const user = useContext(store);
	const { dispatch } = user;
	const [cookies, setCookies, removeCookie] = useCookies('_session')
	const classes = useStyles()

	const handleLogOut = async (e) => {
		e.preventDefault()
		removeCookie('_session')

		await axios
			.get('/api/v1/account/logout')
			.then(()=>{ 
				history.push('/');
				window.location.reload();
			})
			.catch(err => {console.log(err)})

		dispatch({type: 'setUser', payload: null})
		console.log(user)
		
	} 

	return (
			<Button 
				variant='contained'
				color='secondary'
				className={classes.logoutbutton}
				onClick = {handleLogOut}
			>
				LOG OUT
			</Button>
	);
};

export default LogOutButton;

