const User = require('../models/User.model')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const Signup = (req, res, next) => {

    const { email, password, username, avatar } = req.body

    User
        .create({ email, password, username, avatar })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const Login = (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ errorMessages: ["Provide email and password."] });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ errorMessages: ["User not found."] })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar, tikets, combos, role } = foundUser;

                const payload = { _id, email, username, avatar, tikets, combos, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "5h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ errorMessages: ["Unable to authenticate the user"] });
            }

        })
        .catch(err => next(err));

}

const Verify = (req, res, next) => {

    res.status(200).json(req.payload)

}


module.exports = {
    Signup,
    Login,
    Verify
}