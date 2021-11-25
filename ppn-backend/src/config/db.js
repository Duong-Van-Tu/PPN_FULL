import mongoose from "mongoose";
async function connectDB() {
    try {
        // await mongoose.connect(`mongodb://localhost:27017/ppn`, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // })

        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nwzcc.mongodb.net/ppn`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           });
        console.log("Connect Successfully!!!");
    } catch (error) {
        console.log(error.message);
        console.log("Connect failure!!!");
    }
}

export default connectDB;