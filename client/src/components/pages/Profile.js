import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie'
import { AppHeader } from '../layouts'
import Dropzone, { useDropzone } from 'react-dropzone'
import {TextField, Container, makeStyles, Grid, AppBar,
	Toolbar, Typography, CssBaseline, Button, IconButton,Dialog,
	DialogActions, DialogContent,
	DialogTitle, DialogContentText,
	Divider, Paper, Fab
} from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit'
const axios = require('axios')
const jwt = require('jsonwebtoken')
const AWS = require('aws-sdk')
const randomColor = require('randomcolor')

const useStyles = makeStyles({
	profileGrid: {
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
		left: '2%',
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

	const [url, setUrl] = React.useState("")
	const [openPic, setOpenPic] = React.useState(false)
	const [openBio, setOpenBio] = React.useState(false);
	const [cookies, setCookies] = useCookies('_session')
	const [user, setUser] = useState(jwt.decode(cookies._session))
	const [bio, setBio] = useState()
	const classes = useStyles()
	console.log(`Loaded new bios for ${user.fullName}`)
	console.log(user.bios)

	const onDrop = React.useCallback(acceptedFiles => {
    const s3 = new AWS.S3({
      accessKeyId: process.env.REACT_APP_AWSAccessKeyId,
      secretAccessKey: process.env.REACT_APP_AWSSecretKey
    });

    console.log(acceptedFiles);

		const file = acceptedFiles.ETag
		const params = {
			Bucket: process.env.REACT_APP_Bucket,
			Key: (`${user.fullName.split(' ')[0]}${user.id}/${file}`),
			Body: acceptedFiles
		};

		s3.upload(params, (err, data) => {
			if (err) {
			} else {
				console.log(data)
				this.res.send(data);
			}
		});


		axios.post('/api/v1/account/add-image', {file: acceptedFiles},
			{
				headers: {'Authorization': `Bearer ${cookies._session}`},
			}
		).then(res=>{
			setOpenPic(false)
			console.log(res.data)
		})
			.catch(err=>{console.log(err)})
	
	}, [cookies._session, user.fullName, user.id])


	const handleBio = (e) => {
		setBio(e.target.value)
	}
	const sendBio = () => {
		axios.post('/api/v1/account/update-bio', {bio: bio},
			{
				headers: {'Authorization': `Bearer ${cookies._session}`},
			}
		).then(res=>{
			getBios()
			setOpenBio(false)
			console.log(res.data)
		})
			.catch(err=>{console.log(err)})
	}
	const getBios = () => {

		axios.get(`/user/${user.id}`,
			{headers: {'Authorization': `Bearer ${cookies._session}`}}
		)
			.then(res => {
				setUser({...user, bios: res.data.bios.reverse()})	
			})
	}

	useEffect(()=>{
		getBios()
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
							<AddAPhotoIcon onClick={()=>{setOpenPic(true)}} />
						</Fab>
					</div>
					<Grid container spacing={1}>
						<Grid container item xs={12}>
							<Typography className={classes.nameText} variant='h3'>{user.fullName}</Typography>
							<Grid item xs/>
							<Typography className={classes.age} variant='h3'>{user.age}</Typography>
						</Grid>
					</Grid>
					<Typography className={classes.bio} variant='body'>
						{user.bios[0] && `"${user.bios[0].content}"`}
						<EditIcon  onClick={()=>{setOpenBio(true)}} />
					</Typography>
					<Divider/>
						<Typography variant='h4'>Recent Activity</Typography>
						{user.bios.map(( bio, key )=>(
							<div key={key}>
								<Typography gutterBottom className={classes.posts} variant="body1">
									{bio.content}
								</Typography>
								<Divider/>
							</div>
						))
						}
				</Paper>
			</Grid>

			<Dialog
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				open={openPic}
				onClose={()=>{setOpenPic(false)}}
			>
				<DialogTitle id="alert-dialog-title">{"Update Your Profile Photo"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<Dropzone onDrop={onDrop}>
							{({getRootProps, getInputProps}) => (
								<section>
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<AddAPhotoIcon/>
										<p>Drag 'n' drop some files here, or click to select files</p>
									</div>
								</section>
							)}
						</Dropzone>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			<Dialog
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				open={openBio}
				onClose={()=>{setOpenBio(false)}}
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
					<Button onClick={sendBio} variant='contained'>Update</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Profile;
