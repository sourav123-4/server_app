const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;
