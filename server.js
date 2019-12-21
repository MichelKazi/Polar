require('dotenv').config
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const app=express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=>{
	res.redirect('/api/hello')
})

app.get('/api/hello', (req, res) =>{
	res.send ({ express: 'testing' })
})

app.post('/api/world', (req, res) => {
	console.log(req.body)
	res.send(
		`Here is the body of the POST request: ${req.body.post}`
	)
})

app.listen(port, ()=> console.log(`Listening on port: ${port}`))
