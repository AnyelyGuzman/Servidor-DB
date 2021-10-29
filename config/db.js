const mysql = require ("mysql");
const util = require('util');

const conection = mysql.createConnection({
    host:"localhost",
    user:"anyely",
    password:"anyely074",
    database: "sistemas distribuidos"
});

conection.connect(err => {
    if(err) console.error("Database Error", err.stack);
    console.log("Base de datos conectado");
});

module.exports.query = util.promisify(conection.query).bind(conection);
