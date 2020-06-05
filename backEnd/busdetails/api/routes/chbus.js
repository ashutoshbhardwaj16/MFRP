const chbus = require('../../models/chbus');


module.exports=function(router){
   
/*   
    router.post('/findseat',(req,res)=>{
        bus.find(  {from: req.body.from,to: req.body.to} ,{},(err,busdata)=>{
            if(err) 
            throw err;
            if(busdata.length===0)
            res.json({success:false})
            else
            res.status(200).json({status:true,bus:busdata})
        })
    })
*/

    router.post('/seat',(req,res)=>{
        let b = new chbus(req.body);
        b.save((err,b)=>{
            if(err){
                return res.status(400).json(err);
            }
            res.status(200).json(b);
        })
    })


    router.get('/seats',(req,res)=>{
        chbus.find({},(err,bus)=>{
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
    
    router.put('/updateseat',(req,res)=>{
        chbus.updateOne({ $push: { bookedseats: ["6"] } }),
        (err,result)=>{
            if(err){
                res.send(err);
            }
            else{
                res.send(result)
            }
        }
    })
    
        /*    if(err){
            res.json({success:false,message:err})
        }
        else{
       //         "$push"{bookedseats:res.json.seatno}
       res.json({message:"push requires"})
        }
    })*/

/*
    router.delete('/deleteseat/:id',(req,res)=>{

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
     
*/

}