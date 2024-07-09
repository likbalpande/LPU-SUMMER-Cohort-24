initialize:
    npm init

to install: 
    npm i mongodb mongoose nodemon cors express jsonwebtoken bcrypt dotenv

folder structure:
    |- main.js
    |- .env
    router
        | - authRoutes.js
    controller
        | - authControllers.js
    model
        | - userModel.js
    config
        | - db.js

procedure:
    1. inside main.js
    --> initialize dotenv (inside .env --> PORT=1400)
    --> require express, make app, listen to port, port number will come from .env
    --> app.get('/', (req, res)=>{res.send("App is running...")})
    (( npx nodemon main.js --> Test if the app is running ))

    2. 
    --> make the variables for the db connection in .env
    --> make db connection in db.js
    --> require it in main.js
    (( start the app --> Test if the connection is working : there should be no error and the connection call back should print "--- db connected --"))

    3.
    --> make a router inside authRoutes.js
    --> add a post handler on '/' route
    --> export that router and import it in main.js
    --> attach the router on app at route "/api/v1/auth"









