const express=require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan')         
const bodyParser= require('body-parser');
const cors= require('cors')

app.set('port',(process.env.PORT || 8282));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use('/api',api);
app.use(express.static('static'))

app.use(morgan('dev'));


app.use((req,res)=>{
    const error = new Error('not found');
    error.status(404);
    res.json(error)
});
//mangoose connection
const mongoose= require('mongoose')
mongoose.connect
    ('mongodb://localhost:27017/busDetailsSchema',
    { useNewUrlParser: true})   
const db =mongoose.connection

db.on ('error',console.error.bind(console,'connection error :'))

db.once('open',function(){
    console.log('Connected to mongo db')

    app.listen(app.get('port'),function(){
     console.log('API server listening on port '+ app.get('port')+'!!')
})
})