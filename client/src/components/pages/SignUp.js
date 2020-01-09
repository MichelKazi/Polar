import React, {useContext, useState} from 'react';
import { Avatar, Button, CssBaseline,
				TextField, FormControlLabel, Checkbox,
				Link, Grid, Box, Typography,
				makeStyles, Container, RadioGroup, Radio,
				FormControl, FormLabel, Slider, withStyles
				} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useCookies } from 'react-cookie';
import { useHistory, Redirect } from 'react-router-dom'
const jwt = require('jsonwebtoken')
const axios = require('axios')


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


const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
	const history = useHistory()
  const classes = useStyles();

	const [cookies, setCookie] = useCookies(['_session'])

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [dob, setDob] = useState("")
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [gender, setGender] = useState("")
	const [genderPref, setGenderPref] = useState("")
	const [agePref, setAgePref] = useState("")

	const handleEmail = (e) => {
		setEmail(e.target.value)
	} 
	const handlePassword = (e) => {
		setPassword(e.target.value)
	}
	const handleGender = (e) => {
		setGender(e.target.value)
	}
	const handleDob = (e) => {
		console.log(e.target.value.split('-').join('/'))
		setDob(e.target.value.split('-').join('/'))

	}
	const handleFirstName = (e) => {
		setFirstName(e.target.value)
	}
	const handleLastName = (e) => {
		setLastName(e.target.value)
	}
	const handleGenderPref = (e) => {
		setGenderPref(e.target.value)
	}
	const handleAgePref = (e, newVal) => {
		setAgePref(newVal)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const response = await axios
			.post('/api/v1/entrance/signup', {
				fullName: `${firstName} ${lastName}`,
				email: email,
				password: password,
				gender: gender,
				preference: genderPref,
				agePreference: agePref
			})
			.then( res => {
					setCookie('_session', res.data, {maxAge: 180*86400, path:'/'})
					const user = jwt.decode(res.data)
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
								onChange={handleFirstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
								onChange={handleLastName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
								onChange={handleEmail}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
							<TextField
								onChange={handleDob}
								fullWidth
								id="date"
								label="Birthday"
								type="date"
							/>
            </Grid>
            <Grid item xs={12}>
              <TextField
								onChange={handlePassword}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
							<FormControl component="fieldset" className={classes.formControl}>
								<FormLabel component="legend">Your Gender</FormLabel>
								<RadioGroup aria-label="gender" row  name="gender1" value={gender} onChange={handleGender}>
										<FormControlLabel value="female" control={<Radio />} label="Female" />
										<FormControlLabel value="male" control={<Radio />} label="Male" />
										<FormControlLabel value="non-binary" control={<Radio />} label="Non-binary" />
								</RadioGroup>
							</FormControl>
            </Grid>
            <Grid item xs={12}>
							<Typography gutterBottom>What's your age preference?</Typography>
							<PrettoSlider 
								min={18}
								max={120}
								valueLabelDisplay='auto'
								defaultValue={18} 
								onChange={handleAgePref} 
								aria-labelledby="continuous-slider" 
							/>
            </Grid>
						<Grid item xs={12}>
							<FormControl component="fieldset" className={classes.formControl}>
								<FormLabel component="legend">What are you interested in?</FormLabel>
									<RadioGroup aria-label="gender" row  name="gender1" value={genderPref} onChange={handleGenderPref}>
									<FormControlLabel value="female" control={<Radio />} label="Women" />
										<FormControlLabel value="male" control={<Radio />} label="Men" />
										<FormControlLabel value="doesn't-matter" control={<Radio />} label="It doesn't matter" />
									</RadioGroup>
							</FormControl>
						</Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
						onClick={handleSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
