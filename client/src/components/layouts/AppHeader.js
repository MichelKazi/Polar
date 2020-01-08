import React, { useContext } from 'react';
import { makeStyles, Grid, AppBar,
				 Toolbar, Typography, 
				 Button, IconButton, Dialog,
				 DialogActions, DialogContent,
				 DialogTitle, DialogContentText
				} from '@material-ui/core'
import { store } from '../Store'
import LogOutButton from '../LogOutButton.js'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useCookies } from 'react-cookie';
import { useHistory, Redirect } from 'react-router-dom'
const jwt = require('jsonwebtoken')


const useStyles = makeStyles(theme => ({

}));

const AppHeader = (props) => {
	const [cookies, setCookies] = useCookies('_session')
	const userStore = useContext(store)
  const [open, setOpen] = React.useState(false);
	const [user, setUser] = React.useState(jwt.decode(cookies._session));
	const classes=useStyles()

 const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


	return(
		<AppBar position="static">
			<Toolbar>
				<Typography variant='h5'>
					Hi {user.fullName}
				</Typography>
				<Grid item xs></Grid>
					<Button
					endIcon={<ExitToAppIcon/>}
						color='inherit'
						onClick={handleOpen}
					>
						Sign Out
					</Button>

			</Toolbar>

			<Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={open}
        onClose={handleClose}
      >
				<DialogTitle id="alert-dialog-title">{"Are You Sure?"}</DialogTitle>
				<DialogContent>
          <DialogContentText id="alert-dialog-description">
						Do you really want to sign out? We'd hate for your next potential partner to
						not hear back from you. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Okay, nevermind
          </Button>
					<LogOutButton/>
        </DialogActions>
      </Dialog>

		</AppBar>
	)
};

export default AppHeader;
