const db = require("../utils/db");

module.exports = {
    all(AccountID){
        // return await db("subscribedcourse").innerJoin("course", "course.CourseID", "subscribedcourse.CourseID").innerJoin("category", "category.CategoryID", "course.CategoryID").innerJoin("teacher", "teacher.CourseID", "course.CourseID").where("subscribedcourse.AccountID", AccountID);
        return db.raw(`SELECT course.CourseID, course.CourseImage, course.CourseName, course.CourseSummary, course.CourseDescriptions, course.NumberOfViews, course.CourseRatings, course.CourseReviews, course.NumberOfRegistered, course.CoursePrice, category.CategoryID, course.CourseStatus, category.CategoryName, account.AccountID, account.FullName, course.CourseStatus FROM subscribedcourse, course, category, teacher, account WHERE subscribedcourse.AccountID = ${AccountID} AND course.CourseID = subscribedcourse.CourseID AND category.CategoryID = course.CategoryID and teacher.CourseID = subscribedcourse.CourseID AND account.AccountID = teacher.AccountID`);
    },
    BuyCourse(course){
        return db("subscribedcourse").insert(course);
    },
    getBuy(CourseID,AccountID){
        return db("subscribedcourse").where("CourseID", "=", CourseID).andWhere("AccountID", "=", AccountID);
    },
   
}