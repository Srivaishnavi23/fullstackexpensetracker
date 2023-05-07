const express=require('express');
const bodyParser = require('body-parser');

const sequelize=require('./util/database');

var cors=require('cors');
const app=express();

app.use(cors());

const userRoutes=require('./routes/user');

app.use(bodyParser.json({ extended: false }));

app.use('/user',userRoutes);

sequelize.sync()
.then(result=>{
   
}).catch(err=>{
    console.log(err);
});

app.listen(3000);