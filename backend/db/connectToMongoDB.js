import mongoose from "mongoose";

const connectToMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connected to Database");
        
    } catch (error) {
        console.log("Error connecting tp Database", error.message)
    }
}

export default connectToMongoDB;