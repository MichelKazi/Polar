import React, {useState, useContext} from 'react';
import {
	Avatar, Button, CssBaseline,
	TextField, FormControlLabel, Checkbox,
	Link, Grid, Box,
	Typography, makeStyles, Container
} from '@material-ui/core'
import { useCookies } from 'react-cookie';
import { useHistory, Redirect } from 'react-router-dom'
//import history from '../history';
import { store } from '../Store.js';

const jwt = require('jsonwebtoken');

const axios  = require('axios');

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/MichelKazi/Polar">
				Polar
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));


export default function SignIn() {
	const history = useHistory()
	const classes = useStyles();

	const [cookies, setCookie] = useCookies(['_session'])

	const user = useContext(store);
	const { dispatch } = user;
	//const [user, setUser] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmail = (e) => {
		setEmail(e.target.value)
	} 
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user.state)

		const response = await axios
			.post('/api/v1/entrance/login', {
				email: email,
				password: password
			})
			.then( res => {
				setCookie('_session', res.data, {maxAge: 180*86400, path:'/'})
				const user = jwt.decode(res.data)
				return dispatch({type: 'setUser', payload: user})
			}
			)
			.then(_=>{
				history.push('/dashboard');
				//window.location.reload(false);
			})
			.catch(err => {console.log(err)})

	} 


	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate >
					<TextField
						onChange={handleEmail}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						onChange={handlePassword}
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						onClick={handleSubmit}
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
