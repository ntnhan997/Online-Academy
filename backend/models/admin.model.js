const db = require("../utils/db");

module.exports = {
    async addUser(user){
        const id = await db("account").insert(user);
        return id[0];
    }
}