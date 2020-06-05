const mongoose=require('mongoose');
const busDetailsSchema= new mongoose.Schema({
    userName:{type:String},
    eMail:{type:String},
    phNumber:{type:String},
    password:{type : String},
    dateOfBirth:{type: String},
    gender:{type : String}    
})

module.exports=mongoose.model('users',busDetailsSchema);