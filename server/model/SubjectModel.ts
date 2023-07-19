import mongoose from "mongoose";

const subSubject = new mongoose.Schema({
    exam: String,
    grade: Number
})
const subjectsSchema = new mongoose.Schema({

    ownerId: String,
    math: subSubject,
    english: subSubject,
    computer: subSubject,

});

const SubjectStudent = mongoose.model("subjects", subjectsSchema);

export default SubjectStudent;