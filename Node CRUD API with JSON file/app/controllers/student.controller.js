const Student = require("../models/student.model.js");

exports.findAll = (req, res) => {
  try{
    Student.getAll((err, data) =>{
      if (err == false){
        res.status(200).send(data);
      }
      else {
        res.status(404).send("Data not found!");
      }
    });
  }
  catch(err){
    res.status(500).send(err);
  }
};

exports.findById = (req, res) => {
  try{
    const id = req.params.id;

    Student.findStudentsById(id, (err, data) =>{
      if (err == false){
        res.status(200).send(data);
      }
      else {
        res.status(404).send("Data not found!");
      }
    });
  }
  catch(err){
    res.status(500).send(err);
  }
};

exports.create = (req, res) => {
  try{
    if (!req.body) {
      res.status(400).send("Content can not be empty!");
    }
    else if(req.body.firstName == undefined || req.body.firstName == ""){
      res.status(400).send("First name validation error!");
    }
    else if(req.body.lastName == undefined || req.body.lastName == ""){
      res.status(400).send("Last name validation error!");
    }
    else if(req.body.age == undefined || req.body.age == ""){
      res.status(400).send("Age validation error!");
    }
    else if(req.body.email == undefined || req.body.email == ""){
      res.status(400).send("Email validation error!");
    }
    else{
      const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
      });
    
      Student.createNew(student, (err, data) =>{
        if (err == false){
          res.status(201).send(data);
        }
        else {
          res.status(404).send("Data not found!");
        }
      });
    }
  }
  catch(err){
    res.status(500).send(err);
  }
};

exports.update = (req, res) => {
  try{
    if (!req.body) {
      res.status(400).send("Content can not be empty!");
    }
    else if(req.body.id == undefined || req.body.id == ""){
      res.status(400).send("Id validation error!");
    }
    else if(req.body.firstName == undefined || req.body.firstName == ""){
      res.status(400).send("First name validation error!");
    }
    else if(req.body.lastName == undefined || req.body.lastName == ""){
      res.status(400).send("Last name validation error!");
    }
    else if(req.body.age == undefined || req.body.age == ""){
      res.status(400).send("Age validation error!");
    }
    else if(req.body.email == undefined || req.body.email == ""){
      res.status(400).send("Email validation error!");
    }
    else{
      const student = new Student({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
      });
    
      Student.updateOne(student, (err, data) => { 
        if (err == false){
          res.status(200).send(data);
        }
        else {
          res.status(404).send("Data not found!");
        }
      });
    }
  }
  catch(err){
    res.status(500).send(err);
  }
};

exports.distroyById = (req, res) => {
  try{
    const id = req.params.id;

    Student.deleteById(id, (err, data) =>{
      if(err == false){
        res.status(200).send(data);
      }
      else{
        res.status(404).send("Data not found!");
      }
    });
  }
  catch(err){
    res.status(500).send(err);
  }
};