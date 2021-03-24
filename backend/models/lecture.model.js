const db = require("../utils/db");

module.exports = {
    allByCourseId(idCourse, idUser){
        return db.select("*").from("lecture").innerJoin("subscribedcourse", "subscribedcourse.CourseID", "lecture.CourseID").where("lecture.CourseID", idCourse).andWhere("lecture.LectureDeleted", 0).andWhere("subscribedcourse.AccountID", idUser);
    },
    addCourseByTeacher(Course){
        return db("course").insert(Course);
    },
    addLectureByTeacher(Lecture){
        return db("lecture").insert(Lecture);
    }
}