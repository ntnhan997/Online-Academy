const db = require("../utils/db");

module.exports = {
    async add(teacher){
        const id = await db("teacher").insert(teacher);
        return id[0];
    }
}