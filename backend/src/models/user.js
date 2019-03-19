var sql = require('../database');

//User object constructor
var User = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.create_at = user.create_at;
    this.update_at = user.update_at;
    this.role = user.role;
};


User.create = (newUser, result) => (
    sql.query("INSERT INTO user set ?", newUser, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
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


User.getByEmail = (email, result) => (
    sql.query("Select * from user where email = ? ", email, function (err, res) {
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


User.authenticate = (email, password, result) => (
    sql.query("SELECT * FROM user WHERE email = ? and password = ? limit 1", [email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            res.length == 0 ? result(null, null) : result(null, res[0])
        }
    })
)

User.validateEmail = (email, result) => (
    sql.query("Select * from user WHERE email= ? ", [email], function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            res.length == 0 ? result(null, null) : result(null, res)
        }
    })
)


module.exports = User;