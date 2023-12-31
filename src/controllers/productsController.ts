import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

export default class ProductsController {
  public service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  public registerProducts = async (req: Request, res: Response) => {
    const products = req.body;
    const productsCreated = await this.service.registerProducts(products);
    res.status(201).json(productsCreated);
  };

  public getAll = async (_req: Request, res: Response) => {
    const getAllProducts = await this.service.getAll();
    res.status(200).json(getAllProducts);
  };
}