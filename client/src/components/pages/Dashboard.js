import React, {useEffect, useContext} from 'react'
import { makeStyles, Grid, Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'
import { store } from '../Store.js'
import { useCookies } from 'react-cookie'
import history from '../history'
import LogOutButton from '../LogOutButton.js'
import AppHeader from '../layouts/AppHeader.js'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const Dashboard = props => {
	const [profiles, setProfiles] = React.useState([])
	const [cookies, setCookies, removeCookie] = useCookies('_session')

	useEffect(()=>{
		axios.get(
			'/api/v1/dashboard',
			{headers: {'Authorization': `Bearer ${cookies._session}`}}
		)
			.then(res => setProfiles(res.data))
	}, [cookies._session])

	console.log(profiles)

	const userStore = useContext(store)
	const { dispatch } = userStore
	console.log(`At this point, user should be defined in the global state: ${userStore}`)
	console.log(userStore)

	return (
		<div>
			<AppHeader />
			{profiles.map((profile, key) => {
				return (
					<Card key={key}>
						<CardContent>
							<Typography variant='h5'>
								{profile.fullName}	
							</Typography>
							<Typography variant='h6'>
								{profile.age}
							</Typography>
							<br/>
							<img src={profile.image1} width={500}/>
								<Typography variant='subtitle1'>
								{profile.bios[0] && profile.bios.reverse()[0].content}
								</Typography>
						</CardContent>
						<CardActions>
							<Button variant='contained' color='primary'>I dislike this person</Button>
							<Button variant='contained' color='green'>I like this person</Button>
						</CardActions>
					</Card>
				)
			})}
		</div>
	)
}

export default Dashboard
