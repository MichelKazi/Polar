# Polar

## The User model
A user needs to have a few things upon signup
- Full name
- password
- DOB
- zipcode (or something else related to location idk)  

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

I'm sure I'll draft up better questions later, but this will be what I use to decide what kind of profiles the user is exposed to.  
Actually, this is really simple because the only way you wouldn't see a user's profile is if:
- They are not your gender preference
- They don't live within your range
- They have the exact same answers as you

## Implementing a Recommendation algorithm
What I need for my program is to implement a "smart filter" for users  
This 'filter' will show users ONLY the profiles I want them to see.  
It's easy to read an article like [this one](https://www.klipfolio.com/blog/recommender-system) on the high level concept of recommendations.  
In this specific case for my project, every User is also a product.


