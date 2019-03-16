var sql = require('../database');

//User object constructor
var User = function (category) {
    this.name = category.name;
    this.email = category.email;
    this.password = category.password;
    this.create_at = category.create_at;
    this.update_at = category.update_at;
    this.role = category.role;
};


User.create = (newUser, result) => (
    sql.query("INSERT INTO user set ?", newUser, function (err, res) {

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

User.getById = (userId, result) => (
    sql.query("Select * from user where id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
)


User.getAll = (result) => (
    sql.query("Select * from user", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

User.updateById = (id, user, result) => (
    sql.query("UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?",
        [user.name, user.email, user.password, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
)

User.remove = (id, result) => (
    sql.query("DELETE FROM user WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

module.exports = User;