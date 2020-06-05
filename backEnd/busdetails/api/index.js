const express= require('express')
const router= express.Router()

require('./routes/bus')(router)
require('./routes/users')(router)
require('./routes/chbus')(router)
require('./routes/tickets')(router)

module.exports=router;