import express from 'express'
import { createDoctor, deleteById, getAllDoctor, getDoctorById, updateDoctorById} from '../controller/doctorController.js';

const route = express.Router();

route.post("/createdoctor", createDoctor);
route.get("/getalldoctors", getAllDoctor);
route.get("/getdoctorbyid/:id", getDoctorById);
route.put("/updatedoctorbyid/:id", updateDoctorById);
route.delete("/deletedoctorbyid/:id", deleteById);

export default route;