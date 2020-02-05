import React, {useEffect, useContext} from 'react'
import { CssBaseline, makeStyles, Grid, Container, Typography, Button } from '@material-ui/core'
import { store } from '../Store.js'
import { useCookies } from 'react-cookie'
import history from '../history'
import LogOutButton from '../LogOutButton.js'
import AppHeader from '../layouts/AppHeader.js'
import LikeButton from '../LikeButton.js'
const randomColor = require('randomcolor')
const axios = require('axios')
const jwt = require('jsonwebtoken')

const useStyles = makeStyles({
	root: {
		scrollSnapType: 'y mandatory'
	},

	profile:{
		scrollSnapAlign: 'start',
		textAlign: 'center',
		height: '100vh',
	},
	photo: {
		width: 500,
		margin: '0 auto',
		position: 'relative'
	},
	like: {
		position: 'absolute',
		left: '0%'
	},
	dislike: {
		position: 'absolute',
		right: '0%'
	},
	name: {
		textAlign: 'center'
	}

})

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
	const classes = useStyles()


	return (
		<div className={classes.root}>
			<CssBaseline/>
			<AppHeader />
			{profiles.map((profile, key) => {
				return (
					<Container maxWidth={false} className={classes.profile} key={key} style={{backgroundColor: randomColor({luminosity: 'light'})}}>
						<div className={classes.name}>
							<Typography variant='h2'>
								{profile.fullName}	
							</Typography>
							<Typography variant='h4'>
								{profile.age}
							</Typography>
						</div>
						<br/>
						<div className={classes.photo}>
							<img className={classes.photo}src={profile.image1} width={500} alt=""/>
							<LikeButton user={profile} className={classes.like}/>
							<Button className={classes.dislike}>I dislike this person</Button>
							<Button className={classes.like}>I like this person</Button>

						</div>
						<Typography variant='subtitle1'>
							{profile.bios[0] && profile.bios.reverse()[0].content}
						</Typography>
					</Container>
				)
			})}
		</div>
	)
}

export default Dashboard
