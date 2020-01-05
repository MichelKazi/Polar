import React, {useState, useContext} from 'react';
import history from '../history';
import { store } from '../Store.js';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
  const classes = useStyles();

	const user = useContext(store);
	const { dispatch } = user;
	//const [user, setUser] = useState("")
	//const [email, setEmail] = useState("")
	//const [password, setPassword] = useState("")

	const handleEmail = (e) => {
		dispatch({type: 'handleEmail', payload: e.target.value})
	} 
	const handlePassword = (e) => {
		dispatch({type: 'handlePassword', payload: e.target.value})
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user.state)

		const response = await axios
			.put('/api/v1/entrance/login', {
				email: user.state.email,
				password: user.state.password
			})
			.then( res => {

				localStorage.setItem('extremely-sensitive-token', res.data)
				dispatch({ type: 'setToken', payload: localStorage.getItem('extremely-sensitive-token') })	
				return jwt.decode(res.data)
			}
			)
			.then(()=>{ 
				history.push('/dashboard');
				window.location.reload();
			})
			.catch(err => {console.log(err)})

		dispatch({type: 'setUser', payload: response})
		console.log(response)
		console.log(user)
		
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
