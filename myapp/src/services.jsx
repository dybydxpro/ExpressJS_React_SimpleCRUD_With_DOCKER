import httpCommon from "./http";

class Services{
    getAllStudent(){
        return httpCommon.get("/students");
    }

    getStudentById(id){
        return httpCommon.get(`/students/${id}`);
    }

    postStudent(data){
        return httpCommon.post("/students", data);
    }

    putStudent(data){
        return httpCommon.put("/students", data);
    }

    deleteStudent(id){
        return httpCommon.delete(`/students/${id}`);
    }
}

export default new Services();