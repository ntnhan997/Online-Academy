const db = require("../utils/db");

module.exports = {
  async singleByUserName(username) {
    const list = await db
      .select("*")
      .from("account")
      .where("UserName", "=", username);
    if (list.length === 0) {
      return null;
    }

    return list;
  },
  updateRefreshToken(id, refreshToken) {
    return db("account").where("AccountID", id).update("rfToken", refreshToken);
  },
  async add(user) {
    const id = await db("account").insert(user);
    return id[0];
  },
};
