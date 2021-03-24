const db = require("../utils/db");

module.exports = {
    all(){
        return db.select("*").from("category").where("CategoryDeleted", 0);
    }
}