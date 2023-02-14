import { Pool } from 'mysql2/promise';

import Iorders from '../interface/ordersInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Iorders[]> {
    const result = await this.connection.execute(
      `SELECT orders.id, orders.user_id as userId, 
      JSON_ARRAYAGG(products.id) as productsIds 
      FROM Trybesmith.orders
      INNER JOIN Trybesmith.products ON products.order_id = orders.id
      GROUP BY order_id`,
    );

    const [rows] = result;
    return rows as Iorders[];
  }
}