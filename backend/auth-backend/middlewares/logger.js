const db = require("../config/database");

// Function to log the contents of any database table

function logDatabase(tableName = "users") {
  db.all(`SELECT * FROM ${tableName}`, (err, rows) => {
    if (err) {
      console.error(`Error fetching data from ${tableName}`, err);
      return;
    }
    console.log(`\nDatabase Table: ${tableName}\n`);
    console.table(rows);
  });
}
