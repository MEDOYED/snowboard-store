const sqlite3 = require("sqlite3").verbose(); // .verbose() adds more helpful logging if something goes wrong (optional but useful for debugging)
const db = new sqlite3.Database("./users.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )`);
});

module.exports = db;
