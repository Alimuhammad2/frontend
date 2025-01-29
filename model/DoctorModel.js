import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    
    dname:{
        type:String,
        require:true
    },
    specialist:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

export default mongoose.model("Doctor", doctorSchema);