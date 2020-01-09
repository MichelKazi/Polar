import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie'
import { AppHeader } from '../layouts'
import { Container, makeStyles, Grid, AppBar,
				 Toolbar, Typography, CssBaseline, 
				 Button, IconButton, Dialog,
				 DialogActions, DialogContent,
				 DialogTitle, DialogContentText
				} from '@material-ui/core'
const jwt = require('jsonwebtoken')

const useStyles = makeStyles({
	profileGrid: {
		height: '94.2vh',

		backgroundColor: '#ccc',


	}
})

const Profile = props => {
	const [cookies, setCookies] = useCookies('_session')
	const [user, setuser] = useState(jwt.decode(cookies._session))
	const classes = useStyles()

	return (
		<div>
			<CssBaseline/>
			<AppHeader/>
			<Grid container
				className={classes.profileGrid}
				justify="center"
			>
			</Grid>
		
		</div>
	);
};

export default Profile;
