const mongoose=require('mongoose');
const busDetailsSchema= new mongoose.Schema({
    busType:{type:String},
    departure:{type:String},
    arrival:{type:String},
    seatsAvailable:{type : Number},
    fare:{type: String},
    ServiceTax:{type : Number},
    from:{type:String},
    to:{type:String},
    dateAvailable:{type:String},
    bookedSeats:{type:String}

    
})

module.exports=mongoose.model('bus',busDetailsSchema);