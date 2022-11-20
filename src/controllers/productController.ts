import { Request, Response } from "express";

// Model
import { ProductModel } from "../models/Product";

// Logger
import Logger from "../../config/logger";

export async function createProduct(req: Request, res: Response) {
  try {
    const data = req.body;
    const product = await ProductModel.create(data);
    return res.status(201).json(product);
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
  }
}

export async function findProductById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ error: "O produto não existe." });
    }

    return res.status(200).json(product);
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await ProductModel.find();
    return res.status(200).json(products);
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
  }
}

export async function removeAllProducts(req: Request, res: Response) {
    try {
      await ProductModel.deleteMany();
      return res.status(201).json({ msg: "Produtos removidos com sucesso!" });
    } catch (err) {
      console.log(err);
    }
  }

export async function removeProduct(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ error: "O Produto não existe." });
    }

    await product.delete();

    return res.status(201).json({ msg: "Produto removido com sucesso!" });
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body
    const product = await ProductModel.findById(id);

    if (!product) {
      return res.status(404).json({ error: "O produto não existe." });
    }

    await ProductModel.updateOne({_id: id}, data);

    return res.status(200).json(data);
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
  }
}