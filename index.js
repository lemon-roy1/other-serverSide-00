const express =require('express');
const app = express()
const cors =require('cors')
app.use(cors());
const Port =process.env.PORT || 5000

// data sat
// const dataset =

app.get("/",(req,res)=>{
    res.send("Now server running port")
})


// app.get("/dataset",(req,res)=>{
//     res.send(dataset)
// })

// app.get("/product/id",(req,res)=>{
//     const id =req.params.id
//     const getsingleItem =dataset?.find((p)=>p.id==id)
//     if (!getsingleItem) {
//         res.send("kuja paile ra")
//     }
// })



app.listen(Port,()=>{
    console.log("server running is",Port);
})
