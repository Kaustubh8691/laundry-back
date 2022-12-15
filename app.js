
const express = require('express')
const app =express()
const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("/var/task/backEnd/connection/connectdb");


//connecting to DB

connectDB();
//external middleware
const cors = require('cors')
app.use(cors())


//built-in middleware       npm remove eslint-config-react-app 
app.use(express.json())


//user routes
app.use( require("./backEnd/routes/auth"))

//orders routes
app.use("/order" ,require("./backEnd/routes/orders"))


const PORT= 5000 || process.env.PORT

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port ",PORT);
})

