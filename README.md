# Technologies Used
* Vue.js Framework
* Vue Apollo
* Apex Chart.js
* Vuetify 
* Node.js
* Firebase
* GraphQL 
* Covid-19 API
* Apollo Server with Express Integration
* Heroku Server

# Development Notes
    For this project I am using Vue.js because it is a light-weight framework, I chose Vue particularly
    for it's convenient directives. The main purpose of this app is to give visual data of the current. 
    Through Vue Apollo I implement coronavirus disease statistics globally in real time. The covid 19 data 
    is  queried via Apollo Server 
    Express & GraphQL; the data is then sent back to firebase 
    cloud firestore database & deployed on a Heroku Server.


### Things to finish 

1. `@hapi/joi` package for validation & give an error if cannot validate or else create new user & save it to database. if it isn't validated then we will run a res.status(400) 

1. make conditional to check if user is already in the database & has already been registered.
if they have already been registered then we will run a res.status(400) 

1. hash password before it goes into a database using `bcryptjs`

* create a salt
* create a hash (combines users password 7 salt to create a hashed password)

1. If everything passes & an email is not already registered then create a user.

1. Add the rest of the graphQL Queries:
* Cases By Date
* Cases By Country Name
* Cases by State
* Login Credentials