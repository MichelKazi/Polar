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
		marginTop: '-40vh',
		marginLeft: '-40vw',
		width: '80vw',
		height: '80vh',
		backgroundColor: 'yellow'
	},
	loginBtn: {

	},
	signupBtn: {

	},
	logo: {
		position: 'absolute',
		left: '57.5%',
		top: '15%',
		zIndex: 1
	},
	yolo:{
		height: '80vh',
		backgroundColor: '#ccc'
	}
});


const Home = props => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<CssBaseline />
			<img src='https://i.imgur.com/hDH261n.gif' width={450} alt='logo' className={classes.logo}/>
			<Grid container 
				alignItems='flex-end'
				className={classes.container}
			>
				<Grid 
					id="leftSide"	
					item 
					container 
					className={classes.yolo} 
					xs={7}
					justify="center"
				>
					<Grid item xs={12}>
						<Typography variant='h1'>
							POLAR
						</Typography>
						<Typography variant='p'>
							A dating app for exact opposites.
						</Typography>
					</Grid>
					<Grid item xs={12}>
					</Grid>

					<Grid item xs={2}>
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
					<Grid item xs={2}>
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

			</Grid>
		</React.Fragment>
	)
};

export default Home;
