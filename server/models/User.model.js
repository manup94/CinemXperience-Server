const { Schema, model } = require("mongoose");

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

const User = model("User", userSchema);

module.exports = User;
