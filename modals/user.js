const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    address: {
      geolocation: {
        lat: {
          type: String,
        },
        long: {
          type: String,
        },
      },
      state: {
        type: String,
      },
      city: {
        type: String,
      },
      street: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    country: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    registrationDate: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("user", userSchema);
module.exports = User;
