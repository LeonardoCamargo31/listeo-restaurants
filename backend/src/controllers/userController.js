const express = require('express')

const router = express.Router()

var User = require('../models/user');

//ok
router.get('/', async (req, res) => {
    User.getAll(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.send(users);
    });
})

//ok
router.get('/:idUser', async (req, res) => {
    const idUser = req.params.idUser
    User.getById(idUser, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.send(user);
    });
})

//ok
router.post('/', async (req, res) => {
    const user=(req.body)
    user.create_at=new Date()
    user.update_at=new Date()

    const newUser = new User(user);
    console.log(newUser)

    User.create(newUser, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
})

//ok
router.put('/:idUser', async (req, res) => {
    const idUser = req.params.idUser

    const user=(req.body)
    user.update_at=new Date()

    const newUser = new User(user);
    console.log(newUser)

    User.updateById(idUser, newUser, function (err, user) {
        if (err) {
            res.send(err);
        }
        res.json(user);
    });
})

//ok
router.delete('/:idUser', async (req, res) => {
    const idUser = req.params.idUser
    User.remove(idUser, function (err, user) {
        if (err) {
            res.send(err)
        }
        res.json({ message: 'User successfully deleted' })
    })
})


module.exports = (app) => {
    app.use('/user', router)
}