import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    
    name:String ,
    lastName:String ,
    password:String ,
    classroom:String,
    });
    
    const UserStudent = mongoose.model("studentSchema" , studentSchema);

export default UserStudent ;