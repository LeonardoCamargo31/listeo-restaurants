const express = require('express')

const router = express.Router()

var Category = require('../models/category');


//ok
router.get('/', async (req, res) => {
    Category.getAll(function (err, categories) {
        if (err) {
            res.send(err);
        }
        res.send(categories);
    });
})

//ok
router.get('/:idCategory', async (req, res) => {
    const idCategory = req.params.idCategory
    Category.getById(idCategory, function (err, restaurant) {
        if (err) {
            res.send(err);
        }
        res.send(restaurant);
    });
})

//ok
router.post('/', async (req, res) => {
    const newCategory = new Category(req.body);
    console.log(newCategory)

    Category.create(newCategory, function (err, category) {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
})

//ok
router.put('/:idCategory', async (req, res) => {
    const idCategory = req.params.idCategory
    const newCategory = new Category(req.body);
    console.log(newCategory)

    Category.updateById(idCategory, newCategory, function (err, category) {
        if (err) {
            res.send(err);
        }
        res.json(category);
    });
})

//ok
router.delete('/:idCategory', async (req, res) => {
    const idCategory = req.params.idCategory
    Category.remove(idCategory, function (err, category) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'Category successfully deleted' })
    })
})


module.exports = (app) => {
    app.use('/category', router)
}