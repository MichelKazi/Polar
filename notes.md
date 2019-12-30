# Polar
## Implementing a Recommendation algorithm
What I need for my program is to implement a "smart filter" for users  
This 'filter' will show users ONLY the profiles I want them to see.  
It's easy to read an article like [this one](https://www.klipfolio.com/blog/recommender-system) on the high level concept of recommendations.  



# Sails JS 


## Request (req) and Response (res)

I've seen (req, res) all over the place watching Express JS tutorials or reading code without context to what it really is.  
A good understanding of req and res can be useful if I want to use added functionalities provided by Sails  

#### Request (req)
A request is an object representing an HTTP request.  
In express you can handle this object, and it has all sorts of information and methods, like  
	- Queries and params
	-	Cookies and info
	- Routes
	- Sessions

For example, you can get the params as key-value pairs from an endpoint like `/users/:name` with:  
```javascript
app.get('/users/:name', (req, res) => {
	// assuming the endpoint is localhost:5000/users/michelkazi
	console.log(req.params.name)
	// -> michelkazi
})
```

#### Response

The `res` object represents and HTTP response sent from Express when it gets an HTTP request  
The res object has [a lot of methods](https://expressjs.com/en/api.html#res)  
Some of the important ones to know for this project should be:
- `res.json([body])`
	- This sends a json string of any object that can be serialized as JSON
- `res.redirect([status], path)`
	- This method will redirect a user to another route or valid URL.
	- If left unspecified, [status] will default to 302 //found
- `res.render(view)`
	- This renders the template file you have in your views/ directory 


## Actions

Actions serve as the _middleman_ between your models and views. The logic of your app is contained in the actions files  
The Sails documentation says that actions are bound to routes, so a route like `GET /hello` can be bound to 
```javascript
async (req, res) => {
	return res.send('hello!')
}
```
The page will say "hello!" every time a user hits the `/hello` endpoint  
Actions in Sails go in the same directory as controllers do. so `api/controllers/` is where you'd find your actions  
actions2 syntax doesn't make use of ([req](https://sailsjs.com/documentation/reference/request-req)and [res](https://sailsjs.com/documentation/reference/response-res))parameters  

A login action for instance will look like this:
```javascript
module.exports = {

	friendlyName: 'Log in',
	description: 'Log a user in'

	inputs: {
		email: { type: 'string', isEmail: 'true', required: 'true' },
		password: { type: 'string', required: 'true' },
		rememberMe: { type: 'boolean' }
	}
	
	exits: {
		success: { ... },
		badCombo: { responseType: 'unauthorized' }
	}

	fn: async (inputs) =>{
		var userRecord = await User.findOne({
			emailAddress: inputs.emailAddress.toLowerCase()
		})
		if(!userRecord) {
			throw 'badCombo'
		}

		await sails.helpers.passwords.checkPassword(inputs.password, userRecord.password)
		.intercept('incorrect', 'badCombo')

		this.req.session.userId = userRecord.id
	}
	
}
```
The most important things to note here are the `inputs` object, which holds user info,  
the `exits` object which hold responses upon exiting the action depending on the nature of exit,  
and the `fn` object, which carries out the actual function of the action.  

You can then let a route call the action in your `config/routes.js` directory like so:
`'PUT   /api/v1/entrance/login': { action: 'path/to/login'  },`

## Controllers


## Database Stuff
Since my users are going to choose whether or not they like someone, I could probably use another table in my database  
These tables will subsequently have a 'many to many' relationship 
[This](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html) should help shed more light on that.

#### Migrations
To keep from having to redo SQL in migration again during production, I'm going to create the new table with a migration  
I'll use the db-migrate node module to get this done.
## Misc. Notes

Since this is a dating app, I obviously need users, which I figured can be an object.  
However, I also need to put users in a database.  
The users and their profiles are going to be in a database, but does it make sense to have a user object?  
So like when the user logs in, a new user object is instantiated and that stuff can be passed to the client  
Also since it's 2019 (about to be 2020 soon yay!) I think I'll just make users a function. (hope you're happy james 🙄)

## Dependencies and documentations

[Sails JS Actions & Controllers](https://sailsjs.com/documentation/concepts/actions-and-controllers)  
[Sails JS Routes](https://sailsjs.com/documentation/concepts/routes)  
[Sails JS ORM](https://sailsjs.com/documentation/concepts/models-and-orm)  
	- This section is actually pretty big, and I recommend taking the time to read all of it
	- [Sails JS Models](https://sailsjs.com/documentation/concepts/models-and-orm/models)


