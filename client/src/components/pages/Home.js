import React from 'react';
import Logo from '../../logo.png'
import { Container, Typography, Grid, Button,
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
	},
	loginBtn: {

	},
	signupBtn: {

	},
	logo: {
		position: 'absolute',
		left: '38%',
		marginRight: '-225'
	},
	yolo:{
		height: '80vh',
	},
	buttons:{
		display: 'block',
		margin: '0 auto'
	}
});


const Home = props => {
	const classes = useStyles()

	return (
		<React.Fragment>
			<CssBaseline />
			<Typography align='center' variant='h1'>
				POLAR
			</Typography>
			<Typography  align='center' variant='body1'>
				A dating app for exact opposites.
			</Typography>
			<img src={Logo} width={450} alt='logo' className={classes.logo}/>
			<div className={classes.buttons}>

				<Container>
				
					<Grid justify='center' container>
						<Grid item xs={2}>
							<Button 
								id="signup-btn-home"
								variant="contained" 
								color="secondary"
								component={RouterLink}
								to="/signup"
							>
								<Typography align='center' variant="h6">
									SIGN UP
								</Typography>
							</Button>
						</Grid>
						<Grid item xs={2}
							alignItems='center'
							alignContent='center'

						>
							<Button 
								id="login-btn-home"
								variant="contained" 
								color="secondary"
								component={RouterLink}
								to="/login"
							>
								<Typography  align='center'variant="h6">
									LOG IN
								</Typography>
							</Button>
						</Grid>
					</Grid>
				</Container>
			</div>
		</React.Fragment>
	)
};

export default Home;
