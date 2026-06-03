const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    item: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "Out For Delivery",
        "Delivered",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);