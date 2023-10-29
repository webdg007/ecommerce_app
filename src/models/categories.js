const sqlConnection = require('../services/sqlConnection');

function listCategories(callback) {
    let sql = "SELECT id as catID, name as CatName from categories";
    let data = [];
    sqlConnection.executeQuery(sql, data, function(err, result) {
        callback(err, result);
    })
}

function addCategory(data, callback) {
    let sql = `INSERT INTO categories 
                (name, created_at, updated_at)
                VALUES (?, now(), now())`;
    let values = [];
    values.push(data.name);
    sqlConnection.executeQuery(sql, values, function(err, result) {
        callback(err, result);
    })
}

module.exports = {listCategories, addCategory}

