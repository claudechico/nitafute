const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
require("dotenv").config();
const cors=require('cors')
require('./model/db');
const postRoutes = require('./routes/postRoutes')
const userRouter =require('./routes/authRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const path = require('path')
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './nitafutie/build')))
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const PORT = process.env.PORT || 8080;  
// routes
app.use('/api/v1/auth', userRouter)
// post routes
app.use('/api/v1/auth', postRoutes)
// category Routes
app.use('/api/v1/auth', categoryRoutes)
app.use('*', function(req,res){
res.sendFile(path.join(__dirname, './nitafutie/build/index.html'))

})
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
