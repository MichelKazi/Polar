import React, { useState, useEffect} from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
const axios = require('axios');

const Login = props => {
	
	const [email, setEmail] = useState('Controlled')
	const [user, setUser] = useState({})
	const [flash, setFlash] = useState(false)
  const handleChange = event => {
    setEmail(event.target.value);
  };

	const handleSubmit = (e) => {
		e.preventDefault()
		axios
			.put('/api/v1/entrance/login', {
			email: email,
			password: '12345'
			})
			.then( res => {
				if (res.status !== 200){
					setFlash(true)
				}
				setUser(res.data)
			}
		)
		console.log(user)
		
	} 

	return (
		<div>

			  <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <h1>Log In</h1>


          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="user[email]" onChange={handleChange} type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="name" name="user[password]" type="password" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
						<Input type="submit" />
          </FormControl>

					{flash && <p> WRONG </p>}

        </form>
      </div>	

	)

};

export default Login;
