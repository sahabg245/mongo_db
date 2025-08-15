require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express')
const app=express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    .then(
        console.log("Connection is succesfully created")
    );
    console.log("MongoDB Connected to Cloud");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    age:Number,
    dep:String,
    date:{type:Date , default:Date.now}
})

const model=mongoose.model('user',userSchema);

// (async () => {
//   await connectDB();

//   const user = await model.insertMany([{
//         name: "Ahmad",
//         age: 21,
//         dep: "BSSE"
//       },
//       {
//         name: "Hamza",
//         age: 21,
//         dep: "BSAI"
//       }
// ]);

//   process.exit();
// })();


// const readData = async () =>
// {
//     await connectDB();
//     const user = await model.find({name:"Abdul Qudoos"}).select({_id:0,name:1}).limit(1);
//     console.log(user);
//     await mongoose.connection.close();
// }       


const total_doc = async()=>{
    await connectDB();
    const count = await model.countDocuments({dep:"BSCS"});
    console.log(`Total number of students in BSCS is: ${count}`);
    await mongoose.connection.close();
}
function start()
{
  console.log(`server is started`);
}

app.listen(3000,()=>{
  console.log("Server is listening on port http://localhost/3000")
})

total_doc();
// readData()
start()