const express = require('express')
const bcrypt = require('bcryptjs')
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
    const user = (req.body)
    user.create_at = new Date()
    user.update_at = new Date()

    //gerando hash
    user.password = await bcrypt.hash(user.password, 10)

    const newUser = new User(user);

    //verificar se email já existe, caso não exista pode gravar
    User.validateEmail(user.email, function (err, user) {
        if (user != null) {
            return res.send({ error: 'User already exists' })
        }
        else {
            //caso não existe usuario com esse email, ai posso inserir um novo usuario
            User.create(newUser, function (err, user) {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            });
        }
    })
})



//ok
router.put('/:idUser', async (req, res) => {
    const idUser = req.params.idUser

    const user = (req.body)
    user.update_at = new Date()

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