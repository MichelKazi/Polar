import React from 'react';
import { Typography, Grid, Button,
				 CssBaseline, makeStyles } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import {red} from '@material-ui/core/colors'
const useStyles = makeStyles({
	root:{
		backgroundColor: '#000'
	},
	container: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		marginTop: '-30vh',
		marginLeft: '-35vw',
		width: '70vw',
		height: '60vh',
		backgroundColor: 'yellow'
	},
  loginBtn: {

  },
  signupBtn: {

  },
});


const Home = props => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<CssBaseline />
			<Grid container 
				justify='center'
				alignItems='center'
				className={classes.container}
			>
				
			<Grid item xs={3}>
				<Button 
					id="signup-btn-home"
					variant="contained" 
					color="secondary"
					component={RouterLink}
					to="/signup"
				>
					<Typography variant="h6">
						SIGN UP
					</Typography>
				</Button>
			</Grid>
					<Grid item xs={3}>
				<Button 
					id="login-btn-home"
					variant="contained" 
					color="secondary"
					component={RouterLink}
					to="/login"
				>
					<Typography variant="h6">
						LOG IN
					</Typography>
				</Button>

					</Grid>
			</Grid>
		</React.Fragment>
	)
};

export default Home;
