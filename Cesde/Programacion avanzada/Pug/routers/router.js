const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res)=>{
    let myTitle = "hola mundo"
    res.render('index', {titulo:myTitle, sudtitulo:"mi primera pagina con pug", cars:[
        {plate:"dfw234",brand:"Renult Logan",price:45000000,status:true},
        {plate:"wf3243",brand:"Mazada cx-5",price:54000000,status:false},
        {plate:"ABC435",brand:"Chevrolet Aveo",price:30000000,status:true}
    ]})
})

module.exports = router;


router.post('/login', (req, res)=>{
    const {username, password} = req.body
    let fuser = user.find()
})