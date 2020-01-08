import React, {useContext} from 'react'
import { Button } from '@material-ui/core'
import { store } from '../Store.js'
import { useCookies } from 'react-cookie'
import history from '../history'
import LogOutButton from '../LogOutButton.js'
import AppHeader from '../layouts/AppHeader.js'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const Dashboard = props => {
	const [cookies, setCookies, removeCookie] = useCookies('_session')
	const config = {
		headers: {'Authorization': 'Bearer ' + cookies._session}
	}

	const getProfiles = () => {
		axios.get('/api/v1/dashboard', )
	}

	const userStore = useContext(store)
	const { dispatch } = userStore
	console.log(`At this point, user should be defined in the global state: ${userStore}`)
	console.log(userStore)

	return (
		<div>
			<AppHeader />
		</div>
	)
}

export default Dashboard
