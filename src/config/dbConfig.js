import mongoose from "mongoose";


const dbConnection = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Database connected")
    } catch (error) {
      console.log('Database error', error)
    }
  }
  
  export { dbConnection }