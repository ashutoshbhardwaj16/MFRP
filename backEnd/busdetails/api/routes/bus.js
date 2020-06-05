const bus = require('../../models/bus');

module.exports=function(router){



    router.put('/updateseat/:id',(req,res)=>{
      
        bus.findOne({_id:req.params.id}, (err, bus)=>{
            if(err){
                res.json({success:false, message:'Invalid id'})
            } else{
                    bus.bookedSeats = req.body.bookedSeats;
                    bus.save((err)=>{
                        if(err){
                            res.json({success:false, message:err})
                        }else{
                            res.json({success:true, message: bus})
                        }
                    })
                }
            })
    })
    


    router.get('/ueat/:id',(req,res)=>{
        bus.findOne({_id:req.params.id},async (err,bus)=>{
            if(err){
                res.json({status:false,message:err})
            }else{
                if(bus){
                    try{
                        res.json({status:true,message:bus})
                        
                    }
                    catch(err){
                        console.log(err)
                    }
                  }    
                else{
                        res.json({status:false,message:"seats not found"})
                    }
                }
            })
    })


    router.get('/findseat/:id',(req,res)=>{
            bus.findOne({_id:req.params.id},async (err,bus)=>{
                if(err){
                    res.json({status:false,message:err})
                }else{
                    if(bus){
                        try{
                            res.json({status:true,message:bus})
                            
                        }
                        catch(err){
                            console.log(err)
                        }
                      }    
                    else{
                            res.json({status:false,message:"seats not found"})
                        }
                    }
                })
    })

    router.post('/findseatsd',(req,res)=>{
        bus.find(  {from: req.body.from,to: req.body.to} ,{},(err,busdata)=>{
            if(err) 
            throw err;
            if(busdata.length===0)
            res.json({success:false})
            else
            res.status(200).json({status:true,bus:busdata})
        })
    })


    router.put('/updateseatsd',(req,res)=>{
        if(!req.body._id){
            res.json({success:false, message: 'No Bus id provided'})
        }else{
            bus.findOne({_id: req.body._id},(err, bus)=>{
                if(err){
                    res.json({success:false, message:'Not a valid id'})
                }else{
                    bus.busType = req.body.busType;
                    bus.departure = req.body.departure;
                    bus.arrival = req.body.arrival;
                    bus.seatsAvailable = req.body.seatsAvailable;
                    bus.fare = req.body.fare;
                    bus.ServiceTax=req.body.ServiceTax;
                    bus.from=req.body.from;
                    bus.to=req.body.to;
                    bus.dateAvailable=req.body.dateAvailable;
                    bus.bookedseats=req.body.bookedseats;
                    bus.save((err)=>{
                        if(err){
                            res.json({success:false, message:err})
                        }else{
                            res.json({success:true, message:'bus detail updated'})
                        }
                    })
                }
            })
        }
    })
    

    router.post('/findbus',(req,res)=>{
        bus.find(  {from: req.body.from,to: req.body.to} ,{},(err,busdata)=>{
            if(err) 
            throw err;
            if(busdata.length===0)
            res.json({success:false})
            else
            res.status(200).json({status:true,bus:busdata})
        })
    })








    router.post('/bus',(req,res)=>{
        let b = new bus(req.body);
        b.save((err,b)=>{
            if(err){
                return res.status(400).json(err);
            }
            res.status(200).json(b);
        })
    })


    router.get('/bus',(req,res)=>{
        bus.find({},(err,bus)=>{
            if(err){
                res.json({success: false,message: err});
            }
            else{
                if(!bus){
                    res.json({success:false,message:'bus not found'})
                }else{
                    res.json({success:true,bus:bus})
                }
            }
        })
    })


    // put request
    
router.put('/updateBus',(req,res)=>{
    if(!req.body._id){
        res.json({success:false, message: 'No Bus id provided'})
    }else{
        bus.findOne({_id: req.body._id},(err, bus)=>{
            if(err){
                res.json({success:false, message:'Not a valid id'})
            }else{
                bus.busType = req.body.busType;
                bus.departure = req.body.departure;
                bus.arrival = req.body.arrival;
                bus.seatsAvailable = req.body.seatsAvailable;
                bus.fare = req.body.fare;
                bus.ServiceTax=req.body.ServiceTax;
                bus.from=req.body.from;
                bus.to=req.body.to;
                bus.dateAvailable=req.body.dateAvailable;

                bus.save((err)=>{
                    if(err){
                        res.json({success:false, message:err})
                    }else{
                        res.json({success:true, message:'bus detail updated'})
                    }
                })
            }
        })
    }
})

    router.delete('/deleteBus/:id',(req,res)=>{

        if(!req.params.id){
            res.json({success:false, message:'No id provided'})
        } else{
            bus.findOne({_id:req.params.id}, (err, bus)=>{
                if(err){
                    res.json({success:false, message:'Invalid id'})
                } else{
                    bus.remove((err)=>{
                        if(err){
                            res.json({success:false, message:err});
                        } else{
                            res.json ({success:true, message:'bus deleted'})
                        }
                    })
                }
            })
        }
    })
     


}