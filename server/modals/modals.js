// anmol123
// mongodb+srv://anmolnoida09:anmol123@perfume.dwckuz6.mongodb.net/?retryWrites=true&w=majority&appName=perfume


const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    }
})


const userModel = mongoose.model('User',userSchema,'registerdUsers')

module.exports = userModel


// example
// {
//     "username": "testuser2",
//     "email": "testuser2@example.com",
//     "password": "test2password"
//   }



// {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MmIwZGVjZWRiNWQ4NzM4MmMxMGI4In0sImlhdCI6MTcxNjY5NzQxNiwiZXhwIjoxNzE2NzI5ODE2fQ.jdhXs6seZ205ey5nGE_QHk8aBrvwTrJ50QodrgytsTc"
//   }