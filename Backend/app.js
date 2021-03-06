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
const check = require('./routes/check')
const user = require('./routes/user')

// middlewares
app.use(bodyParser.json());

//routes middleware
app.use('/api', check)
app.use('/api', user)


const port = process.env.PORT || 8000

// app starts from here
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})