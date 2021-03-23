const db = require("../utils/db");

module.exports = {
  numberofviews() {
    return db
      .select(
        "course.CourseID",
        "course.CourseImage",
        "course.CourseName",
        "course.CourseSummary",
        "course.CourseDescriptions",
        "course.NumberOfViews",
        "course.CourseRatings",
        "course.CourseReviews",
        "course.NumberOfRegistered",
        "course.CoursePrice",
        "category.CategoryID",
        "course.CourseStatus",
        "category.CategoryName",
        "account.AccountID",
        "account.FullName"
      )
      .from("course")
      .innerJoin("category", "category.CategoryID", "course.CategoryID")
      .innerJoin("teacher", "course.CourseID", "teacher.CourseID")
      .innerJoin("account", "account.AccountID", "teacher.AccountID")
      .orderBy("NumberOfViews", "desc")
      .limit(10);
  },
};
