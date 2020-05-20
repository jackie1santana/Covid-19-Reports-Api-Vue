Apex Chart.js for Data Charts
using Vuetify 
Node js, GraphQL, Firebase

what is NODE_ENV?

 ### Steps of Authentication

1. Use `@hapi/joi` package for validation & give an error if cannot validate or else create new user & save it to database. if it isn't validated then we will run a res.status(400) 

1. make conditional to check if user is already in the database & has already been registered.
if they have already been registered then we will run a res.status(400) 

1. hash password before it goes into a database using `bcryptjs`

* create a salt
* create a hash (combines users password 7 salt to create a hashed password)

1. If everything passes & an email is not already registered then create a user.