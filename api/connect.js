import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "social",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL 연결 실패:", err);
    return;
  }
  console.log("✔ MySQL 연결 성공!");
});
