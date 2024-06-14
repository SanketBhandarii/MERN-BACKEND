import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
     quote : {
        type : String,
        required : true
     },
     fname : {
        type : String,
        required : true
     },
     lname : {
        type : String,
        required : true
     },
})


export default mongoose.model("User", userSchema);