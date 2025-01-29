import bcrypt from 'bcrypt'; // Import bcrypt for hash password
import Doctor from "../model/DoctorModel.js";

export const createDoctor = async(req, res) =>{

    try {
        
        const doctorData = new Doctor(req.body);


        // Ensure all required fields are provided
        if (!doctorData.dname || !doctorData.specialist || !doctorData.email || !doctorData.password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Hash the password before saving it
        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(doctorData.password, salt); // Hash the password

        // Update the doctorData with hashed password
        doctorData.password = hashedPassword;

        if(!doctorData){
            return res.status(404).json({msg: "Doctor not Found"});
        }

        const saveData = await doctorData.save();
        res.status(200).json(saveData);

    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getAllDoctor = async (req,res) =>{
    
    try {
        
        const getall = await Doctor.find();

        if(!getall){
            res.status(404).json({msg: "Doctors not Found"});
        }

        res.status(200).json(getall);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const getDoctorById = async (req, res) =>{

    try {
        
        const id = req.params.id;
        const getById = await Doctor.findById(id);

        if(!getById){
            res.status(404).json({msg: "Doctor not Found"});
        }

        res.status(200).json(getById);

    } catch (error) {
        res.status(500).json({error:error});
    }
}

export const updateDoctorById = async (req, res) =>{

    try {
        
        const id = req.params.id;
        const updateById = await Doctor.findById(id);

        if(!updateById){
            res.status(404).json({msg: "Doctor not Update"});
        }

        const updateDoctor = await Doctor.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateDoctor);

    } catch (error) {
        res.status(500).json({error:error})
    }
}

export const deleteById = async (req, res) =>{

    try {
        
        const id = req.params.id;
        const deletDoctor = await Doctor.findById(id);

        if(!deletDoctor){
            res.status(404).json({msg: "Doctor not Deleted"});
        }

        await Doctor.findByIdAndDelete(id);
        res.status(200).json({msg: "Doctor Deleted Successfully"});

    } catch (error) {
        res.status(500).json({error:error});
    }
}