const db = require("../utils/db");

module.exports = {
    addCourseByTeacher(Course){
        return db("course").insert(Course);
    },
    addLectureByTeacher(Lecture){
        return db("lecture").insert(Lecture);
    }
}