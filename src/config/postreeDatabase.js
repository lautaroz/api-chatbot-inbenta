process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const pgp = require("pg-promise")({});
const db = pgp(process.env.DATABASE_URL);

async function tryConnection() {
  const allUsers = await db.query("SELECT * FROM users");
  // console.log(allUsers);
}

module.exports = {
  tryConnection,
};
