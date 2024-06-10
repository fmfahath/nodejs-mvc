const { getUser } = require("../models/userModel")

exports.loginPage = (req, res, next) => {
    res.render('login')
}

exports.dashboardPage = (req, res, next) => {
    const user = getUser(req.query.email)
    res.render('dashboard', {
        // user : user
        user
    })
}

exports.loginProcess = (req, res, next) => {
    //get user data
    console.log("body data: ", req.body)
    const user = getUser(req.body.email)

    if (user !== null && user.password === req.body.password) {
        res.redirect('/dashboard?email=' + req.body.email)
    }
    else if (user === null) {
        res.render('error', {
            message: "No user exist with this email"
        })
    }
    else {
        res.render('error', {
            message: "Invalid credentials"
        })
    }
}