const db = require("../utils/db");

module.exports = {
    singleByCoureId(courseId, accountId){
       // return db.select("FullName").from("comment").innerJoin("account", "account.AccountID", "comment.AccountID").where("CategoryDeleted", 0);
        return db.raw(`SELECT account.FullName, comment.Comment, comment.DateOfComment FROM comment, account  WHERE comment.AccountID = account.AccountID AND comment.CourseID = ${courseId}`)
    },
    add(comment){
        return db("comment").insert(comment);
    }


}