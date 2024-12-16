import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connectionString = 
        "mongodb+srv://imalsha24w:OgqSvrCVSoKIlL5D@cluster0.vjpjy.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectionString);
        console.log("Connect to the DB");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to the DB");
    }
};