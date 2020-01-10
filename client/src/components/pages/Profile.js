import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie'
import { AppHeader } from '../layouts'
import {TextField, Container, makeStyles, Grid, AppBar,
	Toolbar, Typography, CssBaseline, Button, IconButton,Dialog,
	DialogActions, DialogContent,
	DialogTitle, DialogContentText,
	Divider, Paper, Fab
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
const axios = require('axios')
const jwt = require('jsonwebtoken')

const useStyles = makeStyles({
	profileGrid: {
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
		right: '5%',
		bottom: '5%',
	},
	bio: {
		fontSize: '1.5em'
	},
	age: {
		color: '#666'
	},
	posts: {
		marginTop: 45
	}
})

const Profile = props => {

	const [open, setOpen] = React.useState(false);
	const [cookies, setCookies] = useCookies('_session')
	const [user, setUser] = useState(jwt.decode(cookies._session))
	const [bio, setBio] = useState()
	const classes = useStyles()
	console.log(`Loaded new bios for ${user.fullName}`)
	console.log(user.bios)

	const handleBio = (e) => {
		setBio(e.target.value)
	}
	const sendBio = () => {
		axios.post('/api/v1/account/update-bio', {bio: bio},
			{
				headers: {'Authorization': `Bearer ${cookies._session}`},
			}
		).then(res=>{
			setOpen(false)
			console.log(res.data)
		})
			.catch(err=>{console.log(err)})
	}

	useEffect(()=>{
		axios.get(`/user/${user.id}`,
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
						<Fab className={classes.editProfilePic} color='secondary' size="small">
							<EditIcon onClick={()=>{setOpen(true)}} />
						</Fab>
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
					<Dialog
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						open={open}
						onClose={()=>{setOpen(false)}}
					>
						<DialogTitle id="alert-dialog-title">{"Update Your Status"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								<TextField
									onChange={handleBio}
									multiline
									rows={2}
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="bio"
									autoFocus
								/>
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={()=>{setOpen(false)}} color="primary">
								Okay, nevermind
							</Button>
							<Button onClick={sendBio} variant='contained'>Update</Button>
						</DialogActions>
					</Dialog>
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
