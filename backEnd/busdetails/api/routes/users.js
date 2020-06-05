const users = require('../../models/users');

module.exports=function(router){

/*
    router.post('/login',(req, res)=> {
        Info.findOne({ eMail: req.body.eMail}, (err, user) =>{
          if(err) {
              res.json({ success: false,message: 'user not found'})
          }
          else {
              if(user)
              {
               if(user.password===req.body.password){
                  res.json({ success: true, message: 'Correct user' })

               }
              else{
                  res.json({ success: false, message: 'invalid password'})
              }
            }
            else{
                res.json({ success: false,message: 'invalid user not found'})
            }
          }
        })
    })
*/

router.post('/login',(req,res) =>{
    users.findOne({eMail:req.body.eMail},async (err,user)=>{
        if(err){
            res.json({status:false,message:err})
        }else{
            if(user){
                try{
            //        const match=await bcrypt.compare(req.body.password,user.password)
                    if(req.body.password===user.password){
                        res.json({status:true,message:"Authentic user"})
                    }
                    else{
                        res.json({status:false,message:"password doesn't match"})
                    }
                }
                catch(err){
                    console.log(err)
                }
              }    
            else{
                    res.json({status:false,message:"User not found"})
                }
            }
        })
    })



/*
    router.post('/login',(req,res)=>{
        users.find(  {eMail: req.body.eMail,password: req.body.password} ,{},(err,user)=>{
            if(err) 
            throw err;
            res.status(200).json({status:true,user:"authentic Users"})
        })
    })

    */
  /*  router.post('/login',(req,res)=>{
        users.findOne({eMail:req.body.eMail})
            .then(user=>{
                if(req.body.password===user.password){
                    res.status(200).json({valid: true,message:"Authentic User"})
                }
                else{
                    res.json({valid:false,message:"Incorrect Password"})
                }
            })
            .catch(err=>res.status(400).json('Error:'+error))
        
    })

*/




    router.post('/user',(req,res)=>{
        let user = new users(req.body);
        user.save((err,user)=>{
            if(err){
                return res.status(400).json(err);
            }
            res.status(200).json(user);
        })
    })

    router.get('/users',(req,res)=>{
        users.find({},(err,user)=>{
            if(err){
                res.json({success: false,message: err});
            }
            else{
                if(!user){
                    res.json({success:false,message:'user not found'})
                }else{
                    res.json({success:true,user:user})
                }
            }
        })
    })


router.put('/updateUser',(req,res)=>{
    if(!req.body._id){
        res.json({success:false, message: 'No user id provided'})
    }else{
        users.findOne({_id: req.body._id},(err, user)=>{
            if(err){
                res.json({success:false, message:'Not a valid id'})
            }else{
                user.userName = req.body.userName;
                user.eMail = req.body.eMail;
                user.phNumber = req.body.phNumber;
                user.password = req.body.password;
                user.dateOfBirth = req.body.dateOfBirth;
                user.gender=req.body.gender;
                user.save((err)=>{
                    if(err){
                        res.json({success:false, message:err})
                    }else{
                        res.json({success:true, message:'user detail updated'})
                    }
                })
            }
        })
    }
})

router.delete('/deleteUser/:id',(req,res)=>{

        if(!req.params.id){
            res.json({success:false, message:'No id provided'})
        } else{
            users.findOne({_id:req.params.id}, (err, user)=>{
                if(err){
                    res.json({success:false, message:'Invalid id'})
                } else{
                    user.remove((err)=>{
                        if(err){
                            res.json({success:false, message:err});
                        } else{
                            res.json ({success:true, message:'User deleted'})
                        }
                    })
                }
            })
        }
    })
    
    


}