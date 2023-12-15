const express = require("express");
const mysql = require("mysql");
const names = require("random-name");
const ejs = require("ejs");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "db",
  user: "fullcycle",
  password: "fullcycle",
  database: "fullcycle",
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const name = `${names.first()} ${names.last()}`;
  connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (err) => {
    if (err) {
      res.status(500).send("Error inserting value into table.");
      return;
    }

    connection.query("SELECT * FROM people", (err, people) => {
      if (err) {
        res.status(500).send("Error querying database.");
        return;
      }

      res.render("index", { people });
    });
  });
});

app.get("/health", (req, res) => {
  res.send("I'm alive!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
