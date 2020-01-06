import React, {useState, useContext} from 'react'
import { useCookies } from 'react-cookie'
import history from '../history'
import { store } from '../Store.js'

const jwt = require('jsonwebtoken')
const axios  = require('axios')




export default function LogIn() {

	const user = useContext(store)
	const { dispatch } = user
	const [cookies, setCookie] = useCookies(['_session'])

	const handleEmail = (e) => {
		dispatch({type: 'handleEmail', payload: e.target.value})
	} 

	const handlePassword = (e) => {
		dispatch({type: 'handlePassword', payload: e.target.value})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(user.state)
		const response = await axios
			.put('/api/v1/entrance/login', {
				email: user.state.email,
				password: user.state.password
			})
			.then( res => {
				setCookie('_session', res.data, {maxAge: 180*86400, path:'/'})
				console.log(cookies)
				return jwt.decode(res.data)
			}
			)
			.then(()=>{ 
				history.push('/dashboard')
				window.location.reload()
			})
			.catch(err => {console.log(err)})
		dispatch({type: 'setUser', payload: response})
		console.log(response)
		console.log(user)
	} 

  return (
		<div>I Do be kinda vibin tho 😳 </div>
  )
}
