import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';
import Iorders from '../interface/ordersInterface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Iorders[]> {
    const getAllOrders = await this.model.getAll();
    return getAllOrders;
  }
}