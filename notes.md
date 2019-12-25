# Sails JS 


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


