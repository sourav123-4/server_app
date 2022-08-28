const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    amount: {
      type: Number,
    },
    orderDate: {
      type: String,
    },
    alternativephone: {
      type: Number,
    },
    trackingNo: {
      type: String,
    },
    count: {
      type: Number,
    },
    shippingDate: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = new mongoose.model("order", orderSchema);
module.exports = Order;
