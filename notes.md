# Polar

## The User model
A user needs to have a few things upon signup
- Full name
- password
- DOB
- zipcode (or something else related to location idk)  
- Gender
- Preference

After having the user's account created, I would probably also need to store their traits.  
How would I do this?  
The user would need to answer questions of some sort...  
+ How do you like your midnight snacks?
	- Sweet
	- savory
+ You're ordering a relatively spicy item on a menu, the waiter asks how you'd like it. You answer...  
	- Mild
	- Spicy
+ An apartment in the city, or a rural farmhouse?
	- Apartment
	- Can't hear you, tractor is running

The answers could be stored like so: 
```
{
	question1: 1,
	question2: 3,
	question3: 4,
	question4: 2
}
```
If someone else's traits object looked just like mine, our profiles wouldn't be shown to each other.

I'm sure I'll draft up better questions later, but this will be what I use to decide what kind of profiles the user is exposed to.  
Actually, this is really simple because the only way you wouldn't see a user's profile is if:
- They are not your gender preference
- They don't live within your range
- They have the exact same answers as you

## Sending Profiles To Render
Okay. So we have Users with their attributes and preferences  
We now have to find a way to send profiles to the front end to render  
These profiles are based on a few things.. A user's location, range, dating preferences, and the most important thing, differences  

I generated an action in sails with `sails generate action dashboard/showProfiles`  
This creates an action, showprofiles.js.  
Here's the tricky part, and sort of a todo list because i'm going to bed a 99% sure I'm gonna forget everything  
- accept user's email as input, this'll just come from the session


the action itself would look like: 
```javascript
	const profilesToRender = User.find({

		where: {
			location: {/*based on user's range specification*/},
			gender: {/*based on user's gender preference*/},
			traits: {/*based on if the user has any different answer in the traits questionairre*/}
		},

		select: [ fullName, age, image1, bio ]

		})
```

## Allowing users to chat in my app

The best way to go about this is implementing a p2p protocol (XMPP)  
A TCP connection would make it possible for clients to communicate.  
Since I'm only handling direct messaging and not group chats (This dating app isn't polyamorous yet)...  
I can get away with using sessions to manage messaging between clients  

### Handling a potential pitfall of messaging



## Implementing a Recommendation algorithm
What I need for my program is to implement a "smart filter" for users  
This 'filter' will show users ONLY the profiles I want them to see.  
It's easy to read an article like [this one](https://www.klipfolio.com/blog/recommender-system) on the high level concept of recommendations.  
In this specific case for my project, every User is also a product.

How would I note recommendations for the client?
Although there's a system in place to decide who a user is exposed to, I can also hold information on every single match  
This could be another model, for userId matched with otherUserId

