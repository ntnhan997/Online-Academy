const db = require("../utils/db");

module.exports = {
    async add(rating){
        const avg = await db.select("*").from("course").where("CourseID", rating.CourseID);// 5 5
        const mul = avg[0].CourseReviews * avg[0].CourseRatings; // 25
        const total = ((mul + rating.Score) / (avg[0].CourseReviews + 1)).toFixed(2); //  20/5 4
        await db("course").where("CourseID", rating.CourseID).update("CourseRatings", total);
        await db("course").where("CourseID", rating.CourseID).increment("CourseReviews");
        return await db("rating").insert(rating);
    }
    ,
    async single(CourseID,AccountID){
        const list = await db("rating").where("AccountID","=", AccountID).andWhere("CourseID","=", CourseID);
        if(list.length === 0){
            return null;
        }
        return list;
    }
}