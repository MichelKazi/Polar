import React, {useContext} from 'react';
import { Fab, Button, makeStyles } from '@material-ui/core'
import { store } from './Store.js'
import { useCookies } from 'react-cookie';
import FavoriteIcon from '@material-ui/icons/Favorite';
import history from './history';

const axios = require('axios')

const useStyles = makeStyles({
});


const LikeButton = props => {
	const user = useContext(store);
	const { dispatch } = user;
	const [open, setOpen] = React.useState(false)
	const [message, setMessage] = React.useState("")
	const [cookies, setCookies, removeCookie] = useCookies('_session')
	const classes = useStyles()

	const handleLike = (e) => {

		axios.post('/api/v1/dashboard/like-user', {id: props.user.id},
			{
				headers: {'Authorization': `Bearer ${cookies._session}`},
			}
		).then(res=>{
			setOpen(true)
			setMessage(res.data)	
		})
			.catch(err=>{console.log(err)})

	} 
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	return (
		<>
			<Fab color='primary'>
				<FavoriteIcon onClick={handleLike}	/>
			</Fab>
		</>
	);
};

export default LikeButton;

