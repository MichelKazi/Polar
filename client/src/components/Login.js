import React, { useState, useEffect} from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";
const axios = require('axios')

const Login = props => {
	
	const [email, setEmail] = useState('Controlled')

  const handleChange = event => {
    setEmail(event.target.value);
  };

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.put('')
		
	} 

	return (
		<div>

			  <form onSubmit={handleSubmit} style={{ width: "50%" }}>
          <h1>Log In</h1>


          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" onChange={handleChange} type="email" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" />
          </FormControl>

          <FormControl margin="normal" fullWidth>
						<Input type="submit" />
          </FormControl>

        </form>
      </div>	

	)

};

export default Login;
