const sql = require("../db");

exports.getAssignments = async (req, res) => {
  try {
    const result = await sql.query(`
      SELECT id, title, description, difficulty
      FROM assignments
    `);

    res.json(result.recordset);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Unable to fetch assignments" });
  }
};
