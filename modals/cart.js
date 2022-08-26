const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({}, { timestamps: true });

const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;
