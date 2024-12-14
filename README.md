# backend-nodejs
backend implementation using nodejs
created backend implementation for user registration and login using nodejs
key packages used are:
-> nodejs - for backend implementation
-> express - for routing
-> passport - for authentication of the routes
-> passport-jsonwebtoken - for tokenizing
-> mongoose - for connectivity to mongoDB

the processes included are:
=> a new user can register using their email, password and name
=> the registered user can login using their email and password
=> the registered user who are only logged in can see their profile
=>the registered user who are only logged in can update their profile
=> user profile can be fetched using username
=> profiles(abstract view) of all the users can be fetched
=> questions can be posted by a user
=> answers can be posted to the questions
=> users can upvote to the questions

NOTE:  
**ALL THESE ROUTES ARE FETCHED USING POSTMAN ...
NO FRONT-END IS USED
