const db = require("../utils/db");

module.exports = {
    async addUser(user){
        const id = await db("account").insert(user);
        return id[0];
    },
    listedTeacher(){
        return db.raw("SELECT account.AccountID, account.UserName, account.FullName, account.Email FROM account WHERE account.AccountTypeID = 2");
    },
}