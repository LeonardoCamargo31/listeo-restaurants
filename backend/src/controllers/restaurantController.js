const express = require('express')

const router = express.Router()

var Restaurant = require('../models/restaurant');


//ok
router.get('/', async (req, res) => {
    Restaurant.getAll(function (err, restaurants) {
        if (err) {
            res.send(err);
        }
        res.send(restaurants);
    });
})

//ok
router.get('/:idRestaurant', async (req, res) => {
    const idRestaurant = req.params.idRestaurant
    Restaurant.getById(idRestaurant, function (err, restaurant) {
        if (err) {
            res.send(err);
        }
        res.send(restaurant);
    });
})

//ok
router.post('/', async (req, res) => {
    const newRestaurant = new Restaurant(req.body);
    console.log(newRestaurant)

    Restaurant.create(newRestaurant, function (err, restaurant) {
        if (err) {
            res.send(err);
        }
        res.json(restaurant);
    });
})

//ok
router.put('/:idRestaurant', async (req, res) => {
    const idRestaurant = req.params.idRestaurant
    const newRestaurant = new Restaurant(req.body);
    console.log(newRestaurant)

    Restaurant.updateById(idRestaurant, newRestaurant, function (err, restaurant) {
        if (err) {
            res.send(err);
        }
        res.json(restaurant);
    });
})

//ok
router.delete('/:idRestaurant', async (req, res) => {
    const idRestaurant = req.params.idRestaurant
    Restaurant.remove(idRestaurant, function (err, restaurant) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Restaurant successfully deleted' })
    })
})


module.exports = (app) => {
    app.use('/restaurant', router)
}