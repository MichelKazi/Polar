import React from 'react';
import { Typography, Container, Button,
				 CssBaseline, makeStyles } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import {red} from '@material-ui/core/colors'
const useStyles = makeStyles({
	root:{
		backgroundColor: '#000'
	},
	container: {
		height: '100vh',
		backgroundColor: red[500] 
	},
  loginBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  signupBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const Home = props => {
	const classes = useStyles()

	return (
		<Container maxWidth="sm" className={classes.container}>
			<CssBaseline />
			<Button 
				id="signup-btn-home"
				className={classes.signupBtn} 
				variant="contained" 
				color="secondary"
				component={RouterLink}
				to="/signup"
			>
				<Typography variant="h4">
					SIGN UP
				</Typography>
			</Button>
			<Button 
				id="login-btn-home"
				className={classes.loginBtn} 
				variant="contained" 
				color="secondary"
				component={RouterLink}
				to="/login"
			>
				<Typography variant="h4">
					LOG IN
				</Typography>
			</Button>
		</Container>
	)
};

export default Home;
