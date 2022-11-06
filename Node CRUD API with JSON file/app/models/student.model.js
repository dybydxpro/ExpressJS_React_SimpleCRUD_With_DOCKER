const sql = require("./../config/db.config");

const Student = function(student){
    this.id = student.id;
    this.firstName = student.firstName;
    this.lastName = student.lastName;
    this.age = student.age;
    this.email = student.email;
}

Student.getAll = (result) => {
  try{
    sql.query("SELECT * FROM students", (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(false, res);
    });
  }
  catch(err){
    result(err, null);
  }
};

Student.findStudentsById = (id, result) => {
  try{
    sql.query(`SELECT * FROM students WHERE id = ${id}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(false, res[0]);
    });
  }
  catch(err){
    result(err, null);
  }
};

Student.createNew = (student, result) => {
  try{
    sql.query("INSERT INTO students(`firstName`, `lastName`, `age`, `email`) VALUES('"+ student.firstName+ "', '" + student.lastName + "', " + Number(student.age) + ", '" + student.email + "');", (err, res) => {
      if (err) {
        result(err, null);
        return;
      }

      result(false, res);
    });
  }
  catch(err){
    result(err, null);
  }
}

Student.updateOne = (student, result) => {
  try{
    sql.query("UPDATE students SET `firstName`= '" + student.firstName + "', `lastName`= '" + student.lastName + "', `age`= " + Number(student.age) + ", `email`= '" + student.email + "' WHERE `id` = " + Number(student.id) + ";", (err, res) => {
      if (err) {
        result(err, null);
      }
  
      if (res.affectedRows == 0) {
        result(false, null);
      }
      result(false, res);
    });
  }
  catch(err){
    result(err, null);
  }
}

Student.deleteById = (id, result) =>{
  try{
    sql.query("DELETE FROM students WHERE `id`=" + Number(id) + ";", (err, res) => {
      if (err) {
        result(err, null);
      }

      if (res.affectedRows == 0) {
        result(false, null);
      }
    
      result(false, res);
    });
  }
  catch(err){
    result(err, null);
  }
}

module.exports = Student;