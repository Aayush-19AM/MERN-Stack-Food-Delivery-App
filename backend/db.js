
// const mongoose = require('mongoose');
// const mongoURI = "mongodb://foodie:foodie@ac-uiws7vl-shard-00-00.zjuki19.mongodb.net:27017,ac-uiws7vl-shard-00-01.zjuki19.mongodb.net:27017,ac-uiws7vl-shard-00-02.zjuki19.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-yn1d0r-shard-0&authSource=admin&retryWrites=true&w=majority";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");

//         const db = mongoose.connection;
//         const collection =[ db.collection("food_items")
//         ,db.collection("foodCategory")];

//         const data = await collection.find({}).toArray()
//         foodCategory.find({}).toArray(function (err,catData) {
//        if(err) console.log(err);

//         // console.log(data);  //to stop continuous data in terminal
//         console.log();
//         global.food_items=data;
//         global.foodCategory=catData;
//         // console.log(global.food_items);
//     });
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// }

// module.exports = connectDB;


const mongoose = require('mongoose');
const mongoURI = "mongodb://foodie:foodie@ac-uiws7vl-shard-00-00.zjuki19.mongodb.net:27017,ac-uiws7vl-shard-00-01.zjuki19.mongodb.net:27017,ac-uiws7vl-shard-00-02.zjuki19.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-yn1d0r-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        const db = mongoose.connection;
        const foodItemsCollection = db.collection("food_items");
        const foodCategoryCollection = db.collection("foodCategory");

        const foodItemsData = await foodItemsCollection.find({}).toArray();
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

        global.food_items = foodItemsData;
        global.foodCategory = foodCategoryData;

        console.log("Data loaded successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

module.exports = connectDB;
