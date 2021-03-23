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
  top10lastupdate() {
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
      .orderBy("LastUpdate", "desc")
      .limit(10);
  },
  async idRegister() {
    const idMost = await db
      .select("CategoryID")
      .from("category")
      .groupBy("CategoryID")
      .orderBy("TotalRegistered", "desc")
      .limit(1);
    return idMost;
  },
  async mostregisteredcourses(id) {
    return await db
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
      .whereIn("course.CategoryID", [id[0].CategoryID])
      .innerJoin("category", "category.CategoryID", "course.CategoryID")
      .innerJoin("teacher", "course.CourseID", "teacher.CourseID")
      .innerJoin("account", "account.AccountID", "teacher.AccountID");
  },
};
