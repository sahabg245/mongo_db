require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    .then(
        console.log("Connection is succesfully created")
    );
    console.log("✅ MongoDB Connected to Cloud");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
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
//         name: "Abdul Qudoos",
//         age: 21,
//         dep: "BSCS"
//       },
//       {
//         name: "Abdul Qudoos",
//         age: 21,
//         dep: "BSCS"
//       }
// ]);

//   process.exit();
// })();



// (async () => {
//   await connectDB();
//   const singleUser = await model.find();
//   console.log("🔍 Single user:", singleUser);

//   process.exit();
// })();


const readData = async () =>
{
    await connectDB();
    const user=await model.find({name:"Abdul Qudoos"}).select({_id:0,name:1}).limit(1);
    console.log(user);
    process.exit()
}

readData()