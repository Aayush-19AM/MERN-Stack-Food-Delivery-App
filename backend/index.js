const express=require('express');
const mongoDB = require('./db');
const app=express();
const port=3000;

mongoDB();

app.use(express.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3001");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.use('/api',require('./Routes/CreateUser'))
app.use('/api',require('./Routes/DisplayData'))
app.use('/api',require('./Routes/OrderData'))

app.get('/',(req,res)=>{
    console.log("received get req")

    res.send('hello')
})



app.listen(port,()=>{
    console.log(`App is runnig on port ${port}`)
})