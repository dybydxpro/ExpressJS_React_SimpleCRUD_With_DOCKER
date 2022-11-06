module.exports = app => {
    const student = require("../controllers/student.controller.js");

    var router = require("express").Router();

    router.get("/", student.findAll); // Retrieve All
    router.get("/:id", student.findById); // Retieve by ID
    router.post("/", student.create); // Crete Data
    router.put("/", student.update); // Update by SID
    router.delete("/:id", student.distroyById); // Delete by SID

    app.use('/api/students', router);
};