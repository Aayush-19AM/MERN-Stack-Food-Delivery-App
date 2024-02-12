// const express=require('express')
// const router=   express.Router()
// const Order=require('../models/Orders')

// router.post("/orderData",async (req,res)=>{
// let data=req.body.order_data
// await data.splice(0,0,{Order_date:req.body.order_data})

// //if email not existing in database then create:  ,else:InsertMany()
// let eId=await Order.findOne({'email':req.body.email})
// console.log(eId)
// if (eId===null) {
//     try {
//         await Order.create({
//             email:req.body.email,
//             order_data:[data]
//         })
//         .then(()=>{
//             res.json({success:true})
//         })
//     } catch (error) {
//         console.log(error.messege)
//         res.send("Server Error",error.messege)
        
//     }
// }
// })

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Orders');

// router.post("/orderData", async (req, res) => {
//     let data = req.body.order_data;
//     await data.splice(0, 0, { Order_date: req.body.order_data });

//     // Check if email exists in database
//     let eId = await Order.findOne({ 'email': req.body.email });
//     console.log(eId);
//     if (eId === null) {
//         try {
//             await Order.create({
//                 email: req.body.email,
//                 order_data: [data]
//             });
//             res.status(200).json({ success: true });
//         } catch (error) {
//             console.log(error.message);
//             res.status(500).send("Server Error: " + error.message);
//         }
//     }
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post("/orderData", async (req, res) => {
    try {
        const { email, order_data } = req.body;

        // Check if email is provided
        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required" });
        }

        // Validate order_data or perform any necessary checks here

        // Create the order
        await Order.create({
            email,
            order_data
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

router.post('/myorderData',async(req,res)=>{
    try {
        let myData=await Order.findOne({'email':req.body.email})
        res.json({orderData:myData})
    } catch (error) {
        res.send("Server Error",error.message)
    }
})

module.exports = router;
