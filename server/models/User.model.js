const { Schema, model } = require("mongoose");
const jwt = require('jsonwebtoken')



const bcrypt = require('bcryptjs')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'El usuario es necesario.']
    },
    email: {
      type: String,
      required: [true, 'El Email es necesario.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      minlength: [5, 'La contraseña tiene que tener minimo 5 caracteres.'],
      required: [true, 'La contraseña es necesaria.']
    },
    avatar: {
      type: String,
      default: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
    },
    packs: [{
      ticket: {
        type: Schema.Types.ObjectId,
        ref: 'Pass'

      },
      combo: {
        type: Schema.Types.ObjectId,
        ref: 'Combo'
      }
    }],
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    watchList: [{
      type: String
    }],
  },
  {
    timestamps: true
  }
);

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

userSchema.statics.isDuplicateMovie = function (userId, movieId) {
  const exists = this.count({ _id: userId, watchList: movieId })
  return exists
}


userSchema.methods.signToken = function () {
  const { _id, username, email, avatar, tikets, combos, role } = this
  const payload = { _id, username, email, avatar, tikets, combos, role }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )

  return authToken
}

userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

const User = model("User", userSchema);

module.exports = User;
