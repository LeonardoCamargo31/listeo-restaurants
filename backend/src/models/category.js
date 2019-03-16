var sql = require('../database/index');

//Category object constructor
var Category = function (category) {
    this.title = category.title;
};


Category.create = (newCategory, result) => (
    sql.query("INSERT INTO category set ?", newCategory, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
)

Category.getById = (categoryId, result) => (
    sql.query("Select * from category where id = ? ", categoryId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
)


Category.getAll = (result) => (
    sql.query("Select * from category", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

Category.updateById = (id, category, result) => (
    sql.query("UPDATE category SET title = ? WHERE id = ?",
        [category.title, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
)

Category.remove = (id, result) => (
    sql.query("DELETE FROM category WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

module.exports = Category;