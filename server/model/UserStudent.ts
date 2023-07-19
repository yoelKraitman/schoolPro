import mongoose from "mongoose";


export const personSchema = new mongoose.Schema({
    name:String ,
    lastName:String ,
    password:String 
})
const studentSchema = new mongoose.Schema({
    
    name:String ,
    lastName:String ,
    password:String ,
    grade:String,
    });
    
    const UserStudent = mongoose.model("studentSchema" , studentSchema);

export default UserStudent ;