import mongoose from 'mongoose';

const url="mongodb://127.0.0.1:27017/aniruddha"
const connectDB = async()=>{
    try {
        const conn= await mongoose.connect(url);
        console.log(`connect to MongoDB`);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`)        
    }
}

export default connectDB;