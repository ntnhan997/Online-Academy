const db = require("../utils/db");

module.exports = {
    all(id){
        return db.select("*").from("favoritecourse").innerJoin("course", "favoritecourse.CourseID", "course.CourseID").innerJoin("category", "category.CategoryID", "course.CategoryID").innerJoin("teacher", "course.CourseID", "teacher.CourseID").where("course.CourseStatus","=",1).andWhere("favoritecourse.AccountID","=", id);
    },
    delete(idCourse){
        return db("favoritecourse").where("CourseID", idCourse).del();
    },
    add(favorite){
        return db("favoritecourse").insert(favorite);
    },
    check(favorite){
        return db("favoritecourse").where("CourseID", favorite.CourseID).andWhere("AccountID", favorite.AccountID);
    }


}