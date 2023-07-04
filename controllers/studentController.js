let studentModel = require("../models/student.js");

let studentController = {
    find: async(req,res) =>{
        let found = await studentModel.find({registration_number: req.params.reg});
        res.json(found);
    },
    all: async(req,res) =>{
        let allStudents = await studentModel.find();
        res.json(allStudents);
    },
    create: async(req,res)=>{
        let newStudent = new studentModel(req.body);
        let savedStudent = await newStudent.save();
        res.json(savedStudent);
    }
}

module.exports = studentController;