import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String },
    quantity: { type: Number },
    description: { type: String },
    owner: { type: String },
  },
  {
    timestamps: true,
  }
);

export const ProductModel = model("Product", productSchema);