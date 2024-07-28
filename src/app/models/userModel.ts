import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:{type:String , required: true},
    contact_no: {type:Number , required: true},
    password: {type:String , required: true},
    employee: {type: Boolean , default:false},
})

const employeeSchema = new mongoose.Schema({
    name:{type:String , required: true},
    contact_no: {type:Number , required: true},
    pincodes: {type:Array , required: true},
    services: {type:Array , required: true},
    description: {type: String ,required: true},
})

export const User = mongoose.models?.User || mongoose.model("User" , userSchema);

export const Employee = mongoose.models?.Employee || mongoose.model("Employee" , employeeSchema);