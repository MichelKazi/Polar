import React, { useContext } from 'react';
import getRes from '../getRes.js'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { store } from '../Store'

const AppHeader = (props) => {

	const userStore = useContext(store)
	console.log(userStore)

	return(
		<AppBar position="static">
			<Toolbar>
					<Typography variant="h6" color="inherit">
						Welcome {userStore.state.fullName}!
					</Typography>

			</Toolbar>
		</AppBar>
	)
};

export default AppHeader;
