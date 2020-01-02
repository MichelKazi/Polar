import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { store } from '../Store'

const AppHeader = (props) => {

	console.log(props)
	const state = useContext(store)

	return(
		<AppBar position="static">
			<Toolbar>
					<Typography variant="h6" color="inherit">
						Welcome {props.userName}!
					</Typography>

			</Toolbar>
		</AppBar>
	)
};

export default AppHeader;
