const express = require('express');
const app = express();
const exhbs = require('express-handlebars')
const path = require('path');
const userRoutes = require('./routes/user')

//handlebars engine
app.engine('hbs', exhbs.engine({ extname: 'hbs', defaultLayout: false, }))
app.set('view engine', 'hbs')

//setting public folder path
app.use(express.static(path.join(__dirname, 'public')))

//parse body
app.use(express.urlencoded())

//routes
app.use(userRoutes)

app.listen(8000, () => {
    console.log("Listening port: 8000..")
})