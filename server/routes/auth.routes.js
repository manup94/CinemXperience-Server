const router = require("express").Router();
const bcrypt = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")



const saltRounds = 10

router.post('/signup', (req, res, next) => {

    const { email, password, username, avatar } = req.body

    if (password.length < 5) {
        res.status(400).json({ message: 'Password must have at least 5 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username })
        })
        .then((createdUser) => {

            const { email, username, _id, avatar } = createdUser
            const user = { email, username, _id, avatar }

            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })
})

router.post('/login', (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar, tikets, combos } = foundUser;

                const payload = { _id, email, username, avatar, tikets, combos }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "5h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => next(err));
})

router.get('/verify', isAuthenticated, (req, res, next) => {

    res.status(200).json(req.payload)
})



module.exports = router