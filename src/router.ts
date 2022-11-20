import { Router, Request, Response } from "express";
import {
  createProduct,
  findProductById,
  getAllProducts,
  removeAllProducts,
  removeProduct,
  updateProduct,
} from "./controllers/productController";

// validations
import { validate } from "./middleware/handleValidations";
import { productCreateValidation } from "./middleware/productValidations";

const router = Router();

export default router
  .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API Working");
  })
  .post("/product", productCreateValidation(), validate, createProduct)
  .get("/product/:id", findProductById)
  .get("/product", getAllProducts)
  .delete("/product/:id", removeProduct)
  .delete("/removeAllProducts", removeAllProducts)
  .patch("/product/:id", productCreateValidation(), validate, updateProduct);
