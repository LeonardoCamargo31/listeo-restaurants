const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

const router = express.Router()

var User = require('../models/user');


//agora vamos gerar nosso token
function generateToken(params = {}) {
    //passamos a informação que difere um usuario do outro, e o hash que precisa ser unico
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,//tempo de expiração, deixamos para um dia 86400 segundos
    });
}

router.post('/authenticate', async (req, res) => {
    let { email, password } = req.body;
    if(email==null){
        return res.status(500).send({ error: 'Error' })
    }

    //comparando as senhas, para isso uso o bcrypt, criptografando a senha informada
    //await pois é uma função assincrona
    const cryptPassword='$2a$10$mUBIYBGu4Oy8jGW5F9.8Tu4o8.r2Jwv6ZWHLVXoDByVWVj/ovMZdi'
    if (!await bcrypt.compare(password, cryptPassword)) {
        return res.status(400).send({ error: 'Invalid password' })
    }

    User.authenticate(email, cryptPassword, function (err, user) {
        if (err) {
            return res.send(err);
        }
        if (user == null) {
            return res.status(400).send({ error: 'User not found' })
        }

        user.password = undefined//assim não exibe a senha
console.log(user)
        //cada vez gera um token diferente, pois se baseia no timestamp
        res.send({ user, token: generateToken({ id: user.id }) })
    });

})

router.post('/validateToken', async (req, res) => {
    const token = req.body.token || ''
    //e ele vai validar esse token
    jwt.verify(token, authConfig.secret , function (err, decoded) {
        if (err) {
            return res.status(401).send({ error: 'Token invalid' })
        }
        return res.status(200).send({ valid: !err })
    })
})

module.exports = (app) => {
    app.use('/auth', router)
}