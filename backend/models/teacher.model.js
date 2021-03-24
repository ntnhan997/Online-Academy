const db = require("../utils/db");

module.exports = {
    async add(teacher){
        const id = await db("teacher").insert(teacher);
        return id[0];
    },
    all (AccountID){
        return db.raw(`SELECT course.CourseID,course.CourseStatus, course.CourseImage, course.CourseName, course.CourseSummary, course.CourseDescriptions, course.NumberOfViews, course.CourseRatings, course.CourseReviews, course.NumberOfRegistered, course.CoursePrice, category.CategoryID, course.CourseStatus, category.CategoryName, account.AccountID, account.FullName FROM teacher, course, category, account WHERE teacher.AccountID = ${AccountID} AND course.CourseID = teacher.CourseID AND category.CategoryID = course.CategoryID AND account.AccountID = ${AccountID}`);
    }
}