const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

const data = 'hi';

app.get('/', (req, res) => res.render('index', {data:data}))
app.get('/create', (req, res) => res.render('create'))
app.post('/create', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
