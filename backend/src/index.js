const express=require('express')
const bodyParser = require('body-parser')
const cors=require('cors')

const app=express()
app.use(cors())

app.use(bodyParser.json())//para ele entender quando enviar uma requisão com informações em json
app.use(bodyParser.urlencoded({extended:false}))//para ele entender quando passar parametros via url


require('./controllers/restaurantController')(app)
require('./controllers/categoryController')(app)
require('./controllers/userController')(app)

app.listen(3001)