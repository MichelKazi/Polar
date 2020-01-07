import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { store } from '../Store'
import LogOutButton from '../LogOutButton.js'

const AppHeader = (props) => {

	const userStore = useContext(store)
	console.log(userStore)

	return(
		<AppBar position="static">
			<Toolbar>
				<LogOutButton />

			</Toolbar>
		</AppBar>
	)
};

export default AppHeader;
