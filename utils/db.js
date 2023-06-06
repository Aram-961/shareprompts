import mongoose from "mongoose";

let isConnected = false; // track connection status 

export const connectDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('MongoDB is connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'ChatScribe',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MDB CONNECTED !');
    } catch (error) {
        console.log(error);
    }
}