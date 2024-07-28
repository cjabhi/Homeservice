import mongoose from "mongoose";




export const connectToDatabase = async() => {
    try {
      if(mongoose.connections && mongoose.connections[0].readyState) return;

      const {connection} = await mongoose.connect(
        process.env.MONGO_URI as string ,
        {
          dbName: "homeservice",
        }
      );
      console.log(`connected to database: ${connection.host}`);
      
    } catch (error)
    {
        throw new Error("Error connecting to database");
    }
};