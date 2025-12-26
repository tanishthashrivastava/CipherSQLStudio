const sql = require("mssql");

const config = {
  server: "localhost",
  database: "cipherschools_sqlstudio",
  options: {
    trustServerCertificate: true
  }
};

sql.connect(config)
  .then(() => console.log("✅ Connected to SQL Server via TCP/IP"))
  .catch(err => console.log("❌ DB Connection Error:", err));

module.exports = sql;
