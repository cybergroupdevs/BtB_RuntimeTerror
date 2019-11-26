const express = require('express');
const bodyParser = require('body-parser');
// app
const app = express();

// to enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// import route
const userAuthRoutes = require('./routes/User/auth')
const NGOAuthRoutes = require('./routes/NGO/auth')
const userRoute = require('./routes/User/user')
const NGORoute = require('./routes/NGO/user')

// middleware
app.use(bodyParser.json());

//routes middleware
app.use('/api', userAuthRoutes)
app.use("/api", NGOAuthRoutes)
app.use("/api", userRoute);
app.use("/api", NGORoute);


const port = process.env.PORT || 8000

// app starts from here
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
