import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:false
        },
        email:{
            type:String,
            require:false
        },
        password: {
            type: String,
            require: false,
          },
          phoneNumber: {
            type: Number,
            require: false,
          },
          
          role: {
            type: String,
            require: false,
            default: "employee",
          },
          isActive: {
            type: Boolean,
            require: false,
            default: true,
          },
          isDeleted: {
            type: Boolean,
            require: false,
            default: false,
          },
    },
    { timestamps: true }
)

const Employee = mongoose.model("Employee",employeeSchema)
export {Employee}