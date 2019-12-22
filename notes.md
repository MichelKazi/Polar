# Notes

## Express JS

*What is Express JS?*



*How To use it:*
Assuming you have somewhere near the top of your file `const app = express()`  

*GET requests*

You can create your first route by doing `app.get('/', (req, res) => {...})`  
If you've used the Sinatra micro framework, this is the same as

```ruby 
GET '/' do
	# some code here
end
```

The first parameter in `app.get('/', ()=>{...})` is the route itself. Which in this case is `localhost:3000`  
The second parameter is the function `(req, res)=>{...}`. Which is the same as the `do ... end` block in the aforementioned Sinatra route  
Note that this function has two parameters, req and res (request and response).  

This is what you're telling express to do when a user reaches that endpoint.  

```javascript
app.get('/', (req, res)=>{
	
})
```



## Middleware

*What is "middleware"?*  
in the context of Express, middleware is any number of functions that are invoked by the Express.js routing layer before your final request is made.  

## Misc. Notes

Since this is a dating app, I obviously need users, which I figured can be an object.  
However, I also need to put users in a database.  
The users and their profiles are going to be in a database, but does it make sense to have a user object?  
So like when the user logs in, a new user object is instantiated and that stuff can be passed to the client

## Dependencies and documentations

[OpenID Connect Endpoints](https://developer.okta.com/docs/reference/api/oidc/#endpoints)
[Routing in Express JS](https://expressjs.com/en/guide/routing.html)


