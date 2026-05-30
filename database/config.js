const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "learning_platform"
})


connection.connect();


module.exports = connection;