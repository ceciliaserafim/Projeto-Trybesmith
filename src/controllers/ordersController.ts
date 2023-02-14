import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  public service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const getAllOrders = await this.service.getAll();
    res.status(200).json(getAllOrders);
  };
}