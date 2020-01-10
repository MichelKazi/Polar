import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie'
import { AppHeader } from '../layouts'
import { Container, makeStyles, Grid, AppBar,
	Toolbar, Typography, CssBaseline, 
	Button, IconButton, Dialog,
	DialogActions, DialogContent,
	DialogTitle, DialogContentText
} from '@material-ui/core'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const useStyles = makeStyles({
	profileGrid: {
		height: '94.2vh',
		backgroundColor: '#ccc',
		margin: '0 auto'
	}
})

const Profile = props => {

	const [cookies, setCookies] = useCookies('_session')
	const [user, setUser] = useState(jwt.decode(cookies._session))
	const [bios, setBios] = useState()
	const classes = useStyles()
	console.log(user)

	useEffect(()=>{
		axios.get(`/user/${user.id}`,
			{headers: {'Authorization': `Bearer ${cookies._session}`}}
		)
			.then(res => {
				setUser({...user, bios: res.data.bios})	
			})
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	//TODO
	//list out the user's bios
	//i made it so that the post requests to change bio will give you back the bio object
	//you can append that to user's state instead of re-fetching user's information
	//actually the whole fetch in the useEffect is just for a sanity check
	//good luck you got this

	return (
		<div>
			<CssBaseline/>
			<AppHeader/>
			<Grid container
				xs={10}
				className={classes.profileGrid}
				justify="center"
			>
				<div className={classes.avatarSection}>

				</div>
			</Grid>

		</div>
	);
};

export default Profile;
