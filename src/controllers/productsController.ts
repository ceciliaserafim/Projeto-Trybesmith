import {
  Request,
  Response
} from 'express';

import 

const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();
  res.status(201).json(products);
};

module.exports = {
  getAll,
};