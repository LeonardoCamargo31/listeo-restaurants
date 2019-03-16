var sql = require('../database/index');

//Restaurant object constructor
var Restaurant = function (restaurant) {
    this.name = restaurant.name;
    this.description = restaurant.description;
    this.address = restaurant.address;
    this.email = restaurant.email;
    this.telephone = restaurant.telephone;
    this.facebook = restaurant.facebook;
    this.twitter = restaurant.twitter;
};

Restaurant.create = (newRestaurant, result) => (
    sql.query("INSERT INTO restaurant set ?", newRestaurant, function (err, res) {

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

Restaurant.getById = (restaurantId, result) => (
    sql.query("Select * from restaurant where id = ? ", restaurantId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
)


Restaurant.getAll = (result) => (
    sql.query("Select * from restaurant", function (err, res) {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

Restaurant.updateById = (id, restaurant, result) => (
    sql.query("UPDATE restaurant SET name = ?, description = ?, address = ?, email = ?, telephone = ?, facebook = ?, twitter = ? WHERE id = ?",
        [restaurant.name, restaurant.description, restaurant.address, restaurant.email, restaurant.telephone, restaurant.facebook, restaurant.twitter, id], function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            }
            else {
                result(null, res);
            }
        })
)

Restaurant.remove = (id, result) => (
    sql.query("DELETE FROM restaurant WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
)

module.exports = Restaurant;