const db = require("../utils/db");

module.exports = {
  numberofviews() {
    return db
      .select(
        "course.CourseID",
        "course.CourseStatus",
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
        "course.CourseStatus",
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
  async hotcourse() {
    const list = await db.raw(
      "SELECT course.CourseID,course.CourseStatus, course.CourseImage, course.CourseName, course.CourseSummary, course.CourseDescriptions, course.NumberOfViews, course.CourseRatings, course.CourseReviews, course.NumberOfRegistered, course.CoursePrice, category.CategoryID, course.CourseStatus, category.CategoryName, account.AccountID, account.FullName FROM course, category, teacher, account  WHERE TIMESTAMPDIFF(DAY, course.LastUpdate, UTC_DATE()) < 7 AND category.CategoryID = course.CategoryID AND account.AccountID = teacher.AccountID AND course.CourseID = teacher.CourseID ORDER BY course.NumberOfViews DESC LIMIT 4"
    );
    return list[0];
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
        "course.CourseStatus",
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
  async addregister(id) {
    // tang luot dang ky
    await db
      .from("course")
      .where("CourseID", "=", id)
      .innerJoin("category", "category.CategoryID", "course.CategoryID")
      .increment("TotalRegistered");
    return await db
      .from("course")
      .increment("NumberOfRegistered")
      .where("CourseID", "=", id);
  },

  incrementviews(id) {
    return db
      .from("course")
      .increment("NumberOfViews")
      .where("CourseID", "=", id);
  },
  async fulltextsearch(str, price, rating) {
    if (price === "asc" || price === "desc") {
      return await db.raw(
        `SELECT * FROM course,category, teacher WHERE course.CourseID = teacher.CourseID AND course.CategoryID = category.CategoryID AND MATCH(CourseName) against ("${str}") ORDER BY CoursePrice ${
          price === "asc" ? "asc" : "desc"
        }`
      );
    }
    if (rating === "asc" || rating === "desc") {
      return await db.raw(
        `SELECT * FROM course,category, teacher WHERE course.CourseID = teacher.CourseID AND course.CategoryID = category.CategoryID AND MATCH(CourseName) against ("${str}") ORDER BY CourseRatings ${
          rating === "asc" ? "asc" : "desc"
        }`
      );
    }
    return await db.raw(
      `SELECT * FROM course, category, teacher WHERE course.CourseID = teacher.CourseID AND course.CategoryID = category.CategoryID AND MATCH(CourseName) against ("${str}")`
    );
  },
  addcourse(course) {
    return db("course").insert(course);
  },

  async single(CourseId) {
    const list = await db.raw(
      `SELECT course.CourseID, course.CourseImage, course.CourseName, course.CourseSummary, course.CourseDescriptions, course.NumberOfViews, course.CourseRatings, course.CourseReviews, course.NumberOfRegistered, course.CoursePrice, category.CategoryID, course.CourseStatus, category.CategoryName, account.AccountID, account.FullName FROM course, category, teacher, account WHERE course.CourseID = ${CourseId} AND course.CategoryID = category.CategoryID AND teacher.CourseID = course.CourseID AND account.AccountID = teacher.AccountID`
    );
    if (list.length === 0) {
      return null;
    }

    return list[0];
  },
  coursesuggestion(CategoryID) {
    return db
      .select(
        "course.CourseID",
        "course.CourseImage",
        "course.CourseName",
        "course.CourseSummary",
        "course.CourseDescriptions",
        "course.CourseStatus",
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
      .where("course.CategoryID", CategoryID)
      .orderBy("NumberOfRegistered", "desc")
      .limit(5);
  },
};
