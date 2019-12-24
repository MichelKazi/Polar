# Notes


## Database Stuff
Since my users are going to choose whether or not they like someone, I could probably use another table in my database  
These tables will subsequently have a 'many to many' relationship 
[This](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html) should help shed more light on that.

#### Migrations
To keep from having to redo SQL in migration again during production, I'm going to create the new table with a migration  
I'll use the db-migrate node module to get this done.

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
Also since it's 2019 (about to be 2020 soon yay!) I think I'll just make users a function. (hope you're happy james 🙄)

## Dependencies and documentations

[OpenID Connect Endpoints](https://developer.okta.com/docs/reference/api/oidc/#endpoints)
[Routing in Express JS](https://expressjs.com/en/guide/routing.html)


