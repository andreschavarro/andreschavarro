const express = require('express');
const app = express();
const routers = require('./routers/router')
const port = process.env.PORT || 4000;

app.set('view engine', 'pug')

app.use('/',routers)

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))
app.use('/', routers)

app.listen(port, () => {
    console.log(`server in localhost:${port}`)
})

