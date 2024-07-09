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

    3. inside authController.js
    --> make a signUp function and export it
    --> inside signUp function, send response as "in progress..."

    4. inside authRoutes.js
    --> make a router inside authRoutes.js
    --> add a POST handler on '/signUp' route with signUp function from controller
    --> export that router and import it in main.js
    --> attach the router on app at route "/api/v1/auth"
    (( Open POSTMAN & test --> POST --> http://localhost:1400/api/v1/auth/signup))

    5. Go to frontend and test the connection
        --> make a hook
        --> which does a simple call of api
        --> use that hook in signUp page on signUp button click
        --> and check if the response is "in progress..."

    6. inside main.js
        --> allow cors

    7. inside frontend 
        --> do validation
        --> send data in body for signUp

    8. inside main.js
        --> app.use(express.json()) (this should be written just after the app variable)
    
    9. inside authController.js
        (the model is pending)
        --> get the body and verify if the body is coming or not
        













