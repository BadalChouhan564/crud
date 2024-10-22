const express =  require("express")
const mongoose =  require("mongoose")
const cors =  require("cors")
const UserModel  = require('./models/Users')


const app = express();

app.use(cors())   // for trasfer access server to client side
app.use(express.json())  // pass data to frontend to backend then is format into json form


mongoose.connect("mongodb://localhost:27017/crud")

// for get user Api
app.get("/",(req,res) =>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// for create user Api
app.post("/createUser",(req,res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001,() =>{
    console.log("Server is running");
    
})

