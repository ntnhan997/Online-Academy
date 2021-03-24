const db = require("../utils/db");

module.exports = {
    all(){
        return db.select("*").from("category").where("CategoryDeleted", 0);
    },
    async single(id){
        const list = await db.select("course.CourseID","course.CourseStatus" ,"course.CourseImage", "course.CourseName", "course.CourseSummary", "course.CourseDescriptions", "course.NumberOfViews", "course.CourseRatings", "course.CourseReviews", "course.NumberOfRegistered", "course.CoursePrice", "category.CategoryID", "course.CourseStatus", "category.CategoryName", "account.AccountID", "account.FullName").from("course").where("course.CategoryID","=",id).innerJoin("category", "category.CategoryID", "course.CategoryID").innerJoin("teacher", "course.CourseID", "teacher.CourseID").innerJoin("account", "account.AccountID", "teacher.AccountID");
        if(list.length === 0){
            return null;
        }

        return list;
    },
    add(category){
        return db("category").insert(category);
    },
}