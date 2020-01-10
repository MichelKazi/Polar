import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import { AppHeader } from '../layouts'
import { Container, makeStyles, Grid, AppBar,
	Toolbar, Typography, CssBaseline, 
	Button, IconButton,
	Divider, Paper, Fab
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const useStyles = makeStyles({
	profileGrid: {
		height: '94.2vh',
		backgroundColor: '#ccc',
		margin: '0 auto',
	},
	card: {
		padding: '2.5% 19%'
	},
	profilePic: {
		position: 'relative',
	},
	editProfilePic: {
		position: 'absolute',
		left: '5%',
		bottom: '5%',
	},
	bio: {
		fontSize: '1.5em'
	},
	age: {
		color: '#666'
	}
})

const Profile = props => {

	const { id } = useParams()
	const [cookies, setCookies] = useCookies('_session')
	const [user, setUser] = useState(jwt.decode(cookies._session))
	const [bio, setBio] = useState()
	const classes = useStyles()
	console.log(`Loaded new bios for ${user.fullName}`)
	console.log(user.bios)

	useEffect(()=>{

		axios.get(`/user/${id}`,
			{headers: {'Authorization': `Bearer ${cookies._session}`}}
		)
			.then(res => {
				setUser({...user, bios: res.data.bios.reverse()})	
			})
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<CssBaseline/>
			<AppHeader/>
			<Grid container
				xs={10}
				className={classes.profileGrid}
				justify="center"
			>
				<Paper elevation={3} className={classes.card}>
					<div className={classes.profilePic}>
						<img src={user.image1} width={400} alt="profile" />
					</div>
					<Grid container spacing={1}>
						<Grid container item xs={12}>
							<Typography className={classes.nameText} variant='h3'>{user.fullName}</Typography>
							<Grid item xs/>
							<Typography className={classes.age} variant='h3'>{user.age}</Typography>
						</Grid>
					</Grid>
					<Typography className={classes.bio} variant='body'>{user.bios[0] && `"${user.bios[0].content}"`}</Typography>
					<Divider/>
					<Typography variant='h6'>Recent activity</Typography>
					<Grid className={classes.posts} container>
						<Typography variant='h4'>Recent Activity</Typography>
						{user.bios.map(bio=>(
							<Grid item xs={12}>
								<p>{bio.content}</p>
							</Grid>
						))
						}
					</Grid>
				</Paper>
			</Grid>

		</div>
	);
};

export default Profile;
