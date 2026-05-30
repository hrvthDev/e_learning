const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_learning_database"
})


connection.connect();


module.exports = connection;