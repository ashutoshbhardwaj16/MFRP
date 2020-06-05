const mongoose=require('mongoose');
const busDetailsSchema= new mongoose.Schema({
    seatbooked:{type:Array}
})

module.exports=mongoose.model('chbus',busDetailsSchema);