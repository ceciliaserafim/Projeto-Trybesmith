import { Pool, ResultSetHeader } from 'mysql2/promise';

import Interface from '../interface/productsInterface';

export default class UserModel { 
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public async cadastrarProducts(products: Interface): Promise<Interface> {
    const { name, amount } = products;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    
    return { id: insertId, name, amount };
  }
}