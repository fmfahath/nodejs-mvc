const express = require('express');
const app = express();
const exhbs = require('express-handlebars')
const { loginPage, dashboardPage, loginProcess } = require('./controllers/userController')
const path = require('path');

//handlebars engine
app.engine('hbs', exhbs.engine({ extname: 'hbs', defaultLayout: false, }))
app.set('view engine', 'hbs')

//setting public folder path
app.use(express.static(path.join(__dirname, 'public')))

//parse body
app.use(express.urlencoded())

app.get('/', loginPage)
app.get('/dashboard', dashboardPage)
app.post('/login', loginProcess)



app.listen(8000, () => {
    console.log("Listening port: 8000..")
})