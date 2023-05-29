const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      minlength: [5, 'The minimum password length is 5 letters'],
      required: [true, 'Password is required.']
    },
    avatar: {
      type: String,
      default: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
    },
    packs: [{
      tiket: {
        type: Schema.Types.ObjectId,
        ref: 'Pass'
      },
      combo: {
        type: Schema.Types.ObjectId,
        ref: 'Combo'
      }
    }]
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
