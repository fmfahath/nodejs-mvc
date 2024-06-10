const express = require('express');
const app = express();
const exhbs = require('express-handlebars')
const loginPage = require('./controllers/userController')

//handlebars engine
app.engine('hbs', exhbs.engine({ extname: 'hbs', defaultLayout: false, }))
app.set('view engine', 'hbs')

app.get('/', loginPage)

app.listen(8000, () => {
    console.log("Listening port: 8000..")
})