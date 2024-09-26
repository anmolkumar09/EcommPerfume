const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    Username :{
        type:String,
        requied:true
    },
    image:{
        type:String,
        requied:true,
    },
    review_text:{
        type:String,
        requied:true
    }
})

const userReview = mongoose.model(reviewSchema,'UserReview')

module.exports = userReview