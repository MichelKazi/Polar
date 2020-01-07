import React, { useContext } from 'react';
import { makeStyles, Container, AppBar,
				 Toolbar, Typography, 
				 Button, IconButton, Dialog,
				 DialogActions, DialogContent,
				 DialogTitle, DialogContentText
				} from '@material-ui/core'
import { store } from '../Store'
import LogOutButton from '../LogOutButton.js'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

const AppHeader = (props) => {

	const userStore = useContext(store)
	console.log(userStore)
  const [open, setOpen] = React.useState(false);
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
