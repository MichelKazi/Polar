import React, {useContext} from 'react';
import { Button } from '@material-ui/core'
import { store } from '../Store.js'
import { useCookies } from 'react-cookie';
import history from '../history';
import LogOutButton from '../LogOutButton.js'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const Dashboard = props => {
	const [cookies, setCookies, removeCookie] = useCookies('_session')

	return (
		<div>
			<LogOutButton />
		</div>
	);
};

export default Dashboard;
